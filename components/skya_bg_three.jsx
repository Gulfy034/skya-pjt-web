//使用three.js进行背景实现
import * as THREE from "three";
import { OrbitContorls } from "three";


export function main() {
    const Canvas = document.querySelector('#bg');

    //创建场景
    let bgscence = new THREE.Scene();

    //设置场景背景颜色
    scene.background = new THREE.Color(0xffffff);

    //创建相机
    let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);

    //设置相机的位置
    camera.position.set(0, 4, 21);

    //创建渲染器
    let renderer = new THREE.WebGLRenderer();

    //设置渲染器大小
    renderer.setSize(innerWidth, innerHeight);

    //将渲染器加入到页面中去
    document.body.appendChild(renderer.domElement);

    //监听窗口大小变化事件
    window.addEventListener("resize", event => {
        camera.aspact = innerWidth / innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(innerWidth, innerHeight)
    })

    //创建控制器
    let controls = new OrbitContorls(camera, renderer, domElement)

    //阻尼效果
    controls.enableDamping = true;

    //禁用面板
    controls.enableDamping

    //创建全局Uniform
    let gu = {
        time: { value: 0 }
    }

    //创建点的大小数组和移动数组
    let sizes = []
    let shift = []

    //创建移动函数
    let pushShift = () => {
        shift.push(
            Math.random() * Math.PI,
            Math.random() * Math.PI * 2,
            (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
            Math.random() * 0.9 + 0.1
        )
    }

    //创建点的顶点数组（中间的球体）
    //创建一个长度为5万的数组pts并且y用Array.prototype.map()方法遍历数组进行操作
    let pts = new Array(50000).fill().map(p => {
        //每次遍历均会向size数组添加一个随机大小
        sizes.push(Math.random() * 1.5 + 0.5)
        //调用pushshift()函数添加位置信息，并且返回一个随机方向的的THREE.Vecdor对象
        pushShift();
        return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
    })

    //添加更多的点
    //先循环生成十万个点
    //每次循环中生成一个随机数rand，再生成一个随机半径radius

    for (let i = 0; i < 100000; i++) {
        let r = 10, R = 40;
        let rand = Math.pow(Math.random(), 1.5);
        let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
        //使用new THREE.Vector.setFromCylindricalCoords()生成一个点
        pts.push(new THREE.Vector3().setFromCylindricalCoords(
            radius,
            Math.random() * 2 * Math.PI,
            (Math.random() - 0.5) * 2)
        );
        sizes.push(Math.random() * 1.5 + 0.5);
        pushShift();
    }

    //生成一个点g，同时将点的大小和位置信息添加到sizes和shift数组中
    let g = new THREE.BufferGeometry().setFromPoints(pts);
    //创建一个缓冲几何体并且设置sizes和shift属性
    //注意这里的F要大写Float32BufferAttribute
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(shift, 4));
    //创建点的材质
    let m = new THREE.PointsMaterial(
        {
            //点的大小
            size: 0.125,
            //材质为透明
            transparent: true,
            //表示禁用深度测试，使得点可以叠加
            depthtest: false,
            //使用假发混合模式
            blending: THREE.AdditiveBlending,
            //在材质编译之前修改取色器，在这里，它用来替换顶点着色器和片元着色器，添加uniform
            //和Attrbute，以及自定义颜色和和移动
            onBeforeCompile: shader => {
                shader.uniforms.time = gu.timw
                //首先它为着色器设置了一个uniform变量time，该变量是在材质中被定义的，用来追踪时间
                //然后他定义了一个两个attribute变量size和shift，这两个变量是在缓冲集合体被定义的，用来控制点的大小和移动
                //最后使用replace这个方法替换顶点着色器的代码
                shader.vertexShader = `
            uniform float time;
            attribute float sizes;
            attribute vec4 shift;
            varying vec3 vColor;
            ${shader.vertexShader}
            `
                    //使用replace来替换着色器中的代码
                    //更新点的大小
                    .replace(
                        `gl_PointSize = size;`,
                        `gl_PointSize = size * sizes;`
                    )

                    //更新点的颜色
                    .replace(
                        `#include <color_vertex>`,
                        `#include <color_vertex>
            float d = length(abs(position) / vec3(40.,10.,40));
            d = clamp(d,0.,1.);
            vColor =mix(vec3(227.,155.,0.),vec3(100.,50.,255.,),d)/255;
                `
                    )

                    //更新点的移动
                    .replace(
                        `#include <begin_vertex>`,
                        `#include <begin_vertex>
                    float t = time;
                    float moveT = mod(shift.x + shift.z * t,PI2);
                    float moveS = mod(shift.y + shift.z * t,PI2);
                    transformed += vec3(cos(moveS) * sin(moveT),cos(mozveT),sin(moveS)*sin(moveT)) * shift.w;
                `
                    )
                //修改片元着色器，用于点的边缘圆滑处理

                //定义varying变量vColor，在顶点着色器定义的用于传递点的颜色至着色器
                //然后使用replace方法替换片段着色器的代码
                shader.fragmentShader = `
                varying vec3 vColor:
                ${shader.fragmentShader}
            `.replace(
                    `
                    #include <cliping_planes_fragment>
                `,
                    `#include <cliping_planes_fragment>
                    float d = length(gl_PointCoord.xy - 0.5);
                `
                ).replace(
                    //need to insert space-word
                    `vec4 diffuseColor = vec4( diffuse, opacity );`,
                    `vec4 diffuseColor = vec( vColor, smoothstep(0.5, 0.1, d)/* * 0.5+0.5*/);`
                );
            }
        }
    )

    //-----
    //创建点云将其添加到场景中，并且设置渲染循环

    let p = new THREE.Points(g, m);

    //旋转顺序为ZYX
    p.rotation.order = "ZYX"

    //旋转角度为0.2
    p.rotation.z = 0.2

    //将对象(p) 添加到场景(scene) 中
    scene.add(p)

    //创建时钟对象clock
    let clock = new THREE.Clock()

    //渲染循环，每次循环中会更新控制器，更新p的旋转角度，更新时间
    renderer.setAnimationLoop(() => {
        //更新控制器
        controls.update()
        //获取时钟对象(clock)的已经流逝的时间(t)并且将其乘0.5
        //先关闭时钟
        let t = clock.getElapsedTime() * 0.5
        gu.time.value = t * Math.PI
        //将对象p的旋转角度y设置为t*0.05
        p.rotation.y = t * 0.05
        //渲染场景(scene)和场景(camera)
        renderer.render(scene, camera)
    });
}