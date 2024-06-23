export function playVsfx() {
    const audio = new Audio('/sfx/vsfx_opening.wav');
    audio.play();
    console.log("vsfx_opening played");
}

export function playCrtSfxOn() {
    const audio = new Audio('/sfx/sfx-crt-on.mp3');
    audio.play();
    console.log("crt on");
}

export function playCrtSfxOff() {
    const audio = new Audio('/sfx/sfx-crt-off.mp3');
    audio.play();
    console.log("crt off");
}

export function playsfxOne() {
    const audio = new Audio('/sfx/select_eff1_sqarewave_44100hz_16bit.wav');
    audio.play();
    console.log("sfx1 played");
}

export function playsfxTwo() {
    const audio = new Audio('/sfx/select_eff2_sqarewave_44100hz_16bit.wav');
    audio.play();
    console.log("sfx2 played");
}