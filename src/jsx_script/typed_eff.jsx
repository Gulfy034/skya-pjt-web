import Typed from 'typed.js';

/*for show typed effect in the div-class*/
console.log("successfully added type effects !")

export let skyaTiTyped = new Typed(".skya_title_text", {
    strings: ["~# this project name:", "SKYA_PROJECT"],
    showCursor: false,
    backDelay: 3500,
    typeSpeed: 40,
});

/*export let commonTypedOne = new Typed(".contTitleOne", {
    stringsElement: '#subTitleOne',
    showCursor: false,
    typeSpeed: 25,
});
*/

export let commonTypedTwo = new Typed("#subTitleTwo", {
    stringsElement: '#contTitleTwo',
    strings: ["~ You can explore this cracked `game-dev` from this site!"],
    showCursor: false,
    typeSpeed: 25,
});