import Typed from 'typed.js';

/*for show typed effect in the div-class*/
console.log("successfully added type effects !")

var skyaTitle = {
    strings: [
        "~# this project name: ...", "SKYA_PROJECT"
    ],
    showCursor: false,
    backDelay: 3500,
    typeSpeed: 40,
}

var contOneTyped = {
    strings: [
        "<h3>~ SKYA_Project Website is <span id={'span01'}>'opening'</span> for every!</h3>"
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

let skyaTiTyped = new Typed(".skya_title_text", skyaTitle);
let commonTypedOne = new Typed(".cont_title_one", contOneTyped);
let commonTypedTwo = new Typed(".cont_title_two", contTwoTyped);

/*for reload by clicking this div-class*/

/*

let skyaTitleload = new document.addEventListener("load", (e)=> {

})

*/