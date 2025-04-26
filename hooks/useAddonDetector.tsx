//import React from "react";

export function DarkReaderDetect() {
    const isDarkReaderActivate = document.documentElement.style.getPropertyValue("--darkreader-inline-bgcolor") !== "";
    if (isDarkReaderActivate) {
        console.log("DarkReader Detected!");
    }
    return <p>DarkReader Detected!</p>
}

/* export function ReactAddonDetect() {
    const isReactActivate = 
}
 */

/* export function XHRBlockDetect() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "somethingFromWeb", true);
    xhr.onreadystatechange = () => {

    }
} */