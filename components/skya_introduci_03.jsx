import gsap from "gsap";
import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";


const intrThree = document.querySelector(".cc");
const intrInsert = createRoot(intrThree)
intrInsert.render(
    <>
        <div className={scrollbox}>
            <div className={scrollbox_container}>
                <div className={scrollbox_container_card}>
                    <div className={inbox_roll}>
                        <div className={pic}>
                            <img
                                src="/imgs/boar_boy.svg"
                                width={"250px"} />

                            <br />
                            <a href={"http://skya-project.website"}>
                                this is just a web
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
)

const pic = styled.div`
    
    `
/*
    #boarboi:hover {
        opacity: 1;
        cursor: help;
        animation: glitchAni 0.5s infinite;
}
    #boarboi:not(:hover) {
        opacity: 0.45;
}
*/
const scrollbox = styled.div`
    background-color: #f3f3f3;
    `

const scrollbox_container = styled.div`
    padding: auto 0;
    align-items: center;
    text-align: center;
    `

const scrollbox_container_card = styled.div`
    width: auto;
    height: 30%;
    `

const inbox_roll = styled.div`
    display: flex;
    position: relative;
    float: inline-start;
    font: 600 1.7rem "XTypeWriter-Bold",'Consolas';
    font-style: normal;
    color: #2bad1a;
    /*opacity: 0.35;*/
    transform: rotateZ(20deg);
    z-index: -1;
    `