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

var auguTyped1 = {
    strings: [
        "<span>~#</span>- i can't find any pages matches you have typed !"
    ],
    loop: false,
    showCursor: true,
    cursorChar: '_',
    typeSpeed: 45,
}

var auguTyped2 = {
    strings: [
        "<span>~#</span> here is nothing but there is another way to access this page!"
    ],
    loop: false,
    showCursor: true,
    cursorChar: '_',
    typeSpeed: 5,
}
var errorTyped = new Typed(".errTitleText", errTyped);
var auguoutp1 = new Typed(".output", auguTyped1);
var auguoutp2 = new Typed(".auguroz_footer", auguTyped2);