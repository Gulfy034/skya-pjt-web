import Typed from 'typed.js';

/*for show typed effect in the div-class*/
console.log("successfully added type effects !")

var skyaTitle = {
    strings: [
        "~# this project name: ...", "SKYA_PROJECT"
    ],
    loop: true,
    loopCount: 13,
    showCursor: false,
    backDelay: 3500,
    typeSpeed: 40,
}

var contOneTyped = {
    strings: [
        "<h3>~ SKYA_Project Website is <span>'opening'</span> for every!</h3>"
    ],
    showCursor: false,
    typeSpeed: 25,
}

var contTwoTyped = {
    strings: [
        "<h3>~ You can explore this cracked game-dev from this site!</h3>"
    ],
    showCursor: false,
    typeSpeed: 25,
}

var skyaTiTyped = new Typed(".skya_title_text", skyaTitle);
var commonTypedOne = new Typed(".cont_title_one", contOneTyped);
var commonTypedTwo = new Typed(".cont_title_two", contTwoTyped);

/*for reload by clicking this div-class*/
