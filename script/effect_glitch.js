const glitchtext = {
    player: [],
    texts: [],
    init() {
        this.texts = [...document.getElementsByClassName('glitchtext')];
    },
    //设置故障效果，即颜色偏移
    glitch(){
        clearInterval(this.player);
        setTimeout(()=>{
            clearInterval(this.player);
            this.texts.forEach((text)=>{
                text.classList.remove("glitchtext_glitch");
                text.style.transform='';
                text.style.clipPath='';
            })

        })
        //设置画面裁切
        this.player=setInterval(()=>{
            this.texts.forEach((text)=>{
                text.classList.add("glitchtext_glitch");
                text.style.transform=`translate(${Math.random()*60-30}%,${Math.random()*60-30}%)`;
                let x = Math.random() *100;
                let y = Math.random() *100;
                let h = Math.random() * 50 + 50;
                let w = Math.random() * 40 + 10;
                text.style.clipPath=`Polygon(${x}% ${y}%,${x+w}% ${y}%,${x+w}% ${y+h}%,${x}% ${y+h}%)`;
            })
        }, 30);
    }
}