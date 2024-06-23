import React from "react";
import { createRoot } from "react-dom/client";
import { playsfxOne,playsfxTwo } from '/components/skya_playsfx.jsx'

//target the element to apply the component
const navNode = document.querySelector('#navbox');
//create the html tag to convert and insert
const nav = createRoot(navNode);
nav.render(
    <>
        <ul className={"firstul"}>

            <div className={'linkbox'}>
                <button
                    className={'navbtn'}
                    onClick={playsfxTwo}>
                    Home- #
                </button>
            </div>

            <div className={'linkbox'}>
                <button
                    className={'navbtn'}
                    onClick={playsfxOne}>
                    Download- ^
                </button>
            </div>

            <div className={'linkbox'}>
                <button
                    className={'navbtn'}
                    onClick={playsfxOne}>
                    About- ?
                </button>
            </div>

            <div className={'linkbox'}>
                <button
                    className={'navbtn'}
                    onClick={playsfxOne}>
                    Contect- @
                </button>
            </div>

        </ul>


        <ul className="secondul">

            <button
                id={"langSet"}
                onClick={playsfxTwo}>
                Language
            </button>

            <button
                id={"errPg"}
                onClick={playsfxOne}>
                <a href="/404.html">
                    Go-to 404-page
                </a>
            </button>

        </ul>
    </>
);