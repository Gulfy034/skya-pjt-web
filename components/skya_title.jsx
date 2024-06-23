import React from "react";
import { createRoot } from "react-dom/client";

const titleDom = document.querySelector(".skya_title");
const titleInsert = createRoot(titleDom);

titleInsert.render(
    <>
    <p class="skya_title_text">SKYA_PROJECT</p>
    </>
)