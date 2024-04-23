import Typed from 'typed.js';

/*for show typed effect in the div-class*/
console.log("auguroz output: ~# i added typed effects !")

var skyaTitle = {
    strings: [
        "~# this project name: ", "SKYA_PROJECT"
    ],
    loop: true,
    backDelay: 10000,
    loopCount: 7,
    typeSpeed: 40,
}

var contOneTyped = {
    strings: [
        "<h3>The game that you'll be allowed to set <span>'cheat-codes'</span> in it.</h3>"
    ],
    showCursor: false,
    typeSpeed: 25
}

var skyaTiTyped = new Typed(".skya_title_text", skyaTitle);
var commonTyped = new Typed(".cont_title_one", contOneTyped);

/*for reload by clicking this div-class*/
