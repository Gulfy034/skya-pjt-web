import Typed from 'typed.js';

var errTyped = {
    strings: [
        "SKYA_ERROR", "404 not found!"
    ],
    loop: true,
    loopCount: Infinity,
    backDelay: 2500,
    showCursor: false,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 25,
}

var errorTyped = new Typed(".errTitleText", errTyped);