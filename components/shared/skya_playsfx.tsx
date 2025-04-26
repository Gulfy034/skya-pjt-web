//import React from "react";
import { Howl, Howler } from "howler";

// TODO: useContext to decide what should to play.

export function HowlerTester() {
    return <div id="howlPanel" />
}

export function buttonSfx() {
    Howler.stereo(12);
    const audio = new Howl({
        src: [
            "/sfx/select_eff1_sqarewave_44100hz_16bit.wav",
            "/sfx/select_eff2_sqarewave_44100hz_16bit.wav"
        ],
        volume: 0.65,
        loop: false
    });
    audio.play();
}