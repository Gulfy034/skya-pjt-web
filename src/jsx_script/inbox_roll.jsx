import gsap from "gsap";
import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

//target the element to apply the component
const inboxDom = document.querySelector('#inboxEff');
//create the html tag to convert and insert
const inboxInsert = createRoot(inboxDom);

inboxInsert.render(
    <div className={inboxBox}>
        
    </div>
)

const inboxBox = styled.div`
    display:flex
    `

export function bgroll() {

}