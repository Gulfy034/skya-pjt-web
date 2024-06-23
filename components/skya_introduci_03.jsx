import React from "react";
import { createRoot } from "react-dom/client";
import '/src/styles/skya_introduci_03.scss'

const intrThree = document.querySelector(".cc");
const intrInsert = createRoot(intrThree);

intrInsert.render(
    <>
        <div className="scrollbox">
            <div className="scrollbox_container">
                <div className="scrollbox_container_card">
                    <p>Boar---Cool</p>
                    <img className="picsheet pic1" src="/imgs/boar_boy.svg" />
                </div>
                <div className="scrollbox_container_card">
                    <p>Boar--Pink</p>
                    <img className="picsheet pic2" src="/imgs/boar_boy.svg" />
                </div>
                <div className="scrollbox_container_card">
                    <p>Boar-Boi</p>
                    <img className="picsheet pic3" src="/imgs/boar_boy.svg" />
                </div>
            </div>
        </div>
        <div className="emptybox"> emptybox </div>
        <div className="emptybox"> emptyboxie </div>
    </>
)