import React from "react";
import { createRoot } from "react-dom/client";


//target the element to apply the component
const navNode = document.querySelector('#navbox');
//create the html tag to convert and insert
const nav = createRoot(navNode);

nav.render(
    <>
        <ul className={"firstul"}>

            <linkbox id={'linknox'}>
                <div
                    className={"navbtn"}
                    onClick={playsfxTwo}>
                    Home- #
                </div>
            </linkbox>

            <linkbox id={'linknox'}>
                <div
                    className={"navbtn"}
                    onClick={playsfxOne}>
                    Download- ^
                </div>
            </linkbox>

            <linkbox id={'linknox'}>
                <div
                    className={"navbtn"}
                    onClick={playsfxOne}>
                    About- ?
                </div>
            </linkbox>

            <linkbox id={'linknox'}>
                <div
                    className={"navbtn"}
                    onClick={playsfxOne}>
                    Contect- @
                </div>
            </linkbox>

        </ul>
        <div
            className="secondul">
            <button
                id={"langSet"}
                onClick={playsfxTwo}>
                Language
            </button>

            <button
                id={"ErrPg"}
                className={"errPg"}
                onClick={playsfxOne}>
                <a href="/404.html">
                    Go-to 404-page
                </a>
            </button>
        </div>
    </>
);

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

let navbar = document.querySelector('#linkbox');
let navbtn = document.querySelector('.navbtn');