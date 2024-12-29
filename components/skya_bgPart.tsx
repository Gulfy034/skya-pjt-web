import React from "react";
import gsap from "gsap";
import '@styles/skya_bgPart.scss';

export default function BgPart() {
    return(
        <canvas id="bgPart"></canvas>
    )
}

let textCount = 80;
const text = [
    's u n o k o n c a t e d y e t a n o t h e r p r o j e c t',
    'S K Y A P R O J E C T S K Y A P R O J E C T',
    's k y a t h e p r o g r a m t h e p r o g r a m',
    'w e l c o m e t o t h e w e b s i t e !',
    'h e l l o t h e r e h e l l o t h e r e',
    'k a r m o k a r m o k a r m o k a r m o',
    'a u g u r o z a u g u r o z a u g u r o z',
    'o o p s o o p z o o p s o o p z o o p s o o p z',
    'n a m e i t n a m e i t n a m e i t n a m e i t',
    'i c a n t w a i t t o w r i t e s o m e b u g s',
    'b a l l e r i s s o h a p p y s o b u g g y',
    'h a l o s h i l l o i s h a l o s h i l l o i s',
];
const textInit = {
    x: 0,
    y: 0,
    speed: 15,//higher value, lower speed
    delay: 1,//s
    pulseSlide: 20,//higher value,lower speed
}

const canvas = document.getElementById("bgPart");

function bgText() {
    canvas.width = window.innerWidth;// * window.devicePixelRatio;
    canvas.height = window.innerHeight;// * window.devicePixelRatio;
    //console.log("Current canvas :"+ canvas.width+"w, "+canvas.height+"h");
    const layer1 = canvas.getContext("2d");//first layer
    //canvas.innerText = 'background';
    layer1.textAlign = 'left';//not using 'start'
    layer1.textBaseline = 'top';
    layer1.clearRect(0, 0, canvas.width, canvas.height);
    layer1.fillStyle = '#2bad1a';

    if (canvas.width > 650) {
        layer1.scale(1.8,1.5);//(2.5,2.5);
    } else if (canvas.width < 650) {
        layer1.scale(1.5,1.3);//(3, 3);
        textCount = 40;
    }

    layer1.globalAlpha = 0.05;
    //rotate center
    layer1.translate(canvas.width / 2, canvas.height / 2);
    layer1.rotate((Math.PI / 180) * -5);
    layer1.translate(canvas.width / -2, canvas.height / -2);
    layer1.font = '50px SKYA_Title-Pixel_demo';
    for (let i = 0; i < textCount; i++) {
        layer1.save();
        layer1.translate(Math.random() * 50, i * textCount);// be aware of the textCount changes
        layer1.fillText(text[Math.floor(Math.random() * text.length)] + text[Math.floor(Math.random() * text.length)], textInit.x, textInit.y, canvas.width, canvas.height);
        layer1.restore();
    }
}

const twplay1 = gsap.to(textInit, {
    x: () => -canvas.width / 6,
    y: () => -canvas.height / 3,
    duration: textInit.speed,
    repeat: -1,
    ease: 'power1.inOut',
    //repeatDelay: textInit.delay,
    yoyo: true,
    yoyoEase: 'inOut',
    onUpdate: bgText,//gsap used in this canvas
});

/* TODO
let twplay2 =gsap.to(textInit, {
    x: () => ,
    y: () => ,
    duration: textInit.pulseSlide,
    ease: ,
    onUpdate: bgText,
});
*/

//begin drawing (only supported)
if (canvas.getContext) {
    window.addEventListener("mouseover", () => {
        twplay1.play();

    });

    window.addEventListener("mouseout", () => {
        twplay1.pause();
    });

    window.addEventListener("", () =>{

    })
    window.addEventListener("resize", () => {
        cancelAnimationFrame(bgText);
        requestAnimationFrame(bgText);
    })
}

