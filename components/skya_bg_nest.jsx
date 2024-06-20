import React from "react";
import ReactCanvasNest from "react-canvas-nest"
import { createRoot } from "react-dom/client";

const bgnDom = document.querySelector('.');
const bgnInsert = createRoot(bgnDom);

bgnInsert.render(
    <ReactCanvasNest
        className = 'canvasNest'
        config = {{pointColor: '255, 114, 121'}}
        count = {{}}
    />
)