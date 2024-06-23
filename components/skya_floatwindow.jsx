import React from "react";
import styled from "styled-components";

const floatframe = styled.div`
    background-color: #14285728;
    border: 1px #2bad1a solid;
    `

const popContent = styled.div`
    background: solid #14285757;
    width: 400px;
    height: 100px;
    `
const btn = styled.button`
    background: solid #2bad1a;
    border: 1px #2bad1a solid;
    width: 100px;
    height: 100px;
    `

const okaybtn = styled.button`
    background: solid #2bad1a;
    border: 1px #2bad1a solid;
    width: 100px;
    height: 100px; 
    `

const closebtn = styled.button`
    cursor: pointer;
    `

export default function popWindow() {
    function disWindow() {
        alert("a pop annoys with you!")
    }
    return (
        <div className={floatframe}>
            <h2>Attention</h2>
            <div id={popContent}>
                this is a popwindow.
                <div className={btn}>
                    this is a common button
                </div>
            </div>
                /* if the button has been pushed, then disable the window fastly */
            <Button id={okaybtn} class={okaybtn} OnClick={disWindow}>Okay</Button>
            <Button id={closebtn} class={closebtn} OnClick={disWindow}>Dismiss</Button>
        </div>
        //this is just a window to annoy with u!
    )
}