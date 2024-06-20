import gsap from "gsap";

export function glitcheffOne() {
    const tur = document.querySelector('feTurbulance');
    // const errTitle = document.getElementsByClassName('errTitleText');

    const glitchTl = gsap.timeline({
        paused: true,
        onUpdate: () => {
            console.log(val.freq);
            tur.setAttribute('baseFrequency', `0 ${val.freq}`);
        },
    });

    const val = {
        freq: 0.1,
    };

    glitchTl.to(
        val, {
        freq: 0.3,
        duration: 0.1,
    }
    ); //set freq 0.1 ---> 0.3

    glitchTl.to(
        val, {
        freq: 0.1,
        duration: 0.1,
    }
    ); //set freq 0.3 --> 0.1
}