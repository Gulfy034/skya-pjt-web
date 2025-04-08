import { Howl, Howler } from "howler";

//Howler.stereo();

//TODO: using howler.js to contorl the sound/sfx.

/*
const playVsfxOne = new Howl({
    src: ["/sfx/vsfx_opening.wav"],
    volume: 0.65,
    loop: false,
});

if (document.getElementByClassName("switch-label").active == true) {
    new Audio("/sfx/sfx-crt-on.mp3").play();
} else {
    new Audio("/sfx/sfx-crt-off.mp3").play();
}

const playCrtSfx = new Howl({
    src: ["/sfx/sfx-crt-on.mp3","/sfx/sfx-crt-off.mp3"],
    sprite:{
        crtOn: [],
        crtOff: [],
    }
});

playCrtSfx.once("load", function(){
    playCrtSfx.play();
})
*/
export function playsfxOne() {
    const audio = new Audio("/sfx/select_eff1_sqarewave_44100hz_16bit.wav");
    audio.play();
}

export function playsfxTwo() {
    const audio = new Audio("/sfx/select_eff2_sqarewave_44100hz_16bit.wav");
    audio.play();
}