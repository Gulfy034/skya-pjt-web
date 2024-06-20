import React from "react";
import { createRoot } from 'react-dom/client'; //在不清除现有html的情况下引入react组件

// 渲染 React 组件
const filterDom = document.querySelector('#filters');
const filterInsert = createRoot(filterDom);
filterInsert.render(
    <>
        <svg style={"display: none"}>
            <defs>
                <filter id="glitch1" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
                    <feTurbulence type="turbulence" baseFrequency="0.01 0.1" numOctaves="2" seed="2" stitchTiles="stitch"
                        x="0%" y="0%" width="100%" height="100%" result="turbulence1" />

                    <feDisplacementMap in="SourceGraphic" in2="turbulence1" scale="20" xChannelSelector="R"
                        yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap" />
                </filter>
            </defs>
        </svg>

        <svg style="display: none">
            <defs>
                <filter id="glitch2" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
                    <feTurbulence type="turbulence" baseFrequency="0.015 0.1" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" result="displacementMap" />
                </filter>
            </defs>
        </svg>
    </>
);