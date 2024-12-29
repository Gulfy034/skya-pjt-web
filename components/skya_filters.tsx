export default function CrtSvg () {
    return (
        <>
            <svg height="0" width="0" viewBox="0 0 93.88 76.19">
                <clipPath
                    id="crtPath"
                    clipPathUnits="objectBoundingBox"
                    transform="scale(0.01065 0.01312)">
                    <path
                        d="M47.78.5c11.65,0,38,.92,41.81,4,3.59,3,3.79,22.28,3.79,34.19,0,11.67-.08,27.79-3.53,31.24S60.3,75.69,47.78,75.69c-11.2,0-39.89-1.16-44-5.27S.57,52.42.57,38.73.31,8.56,4,4.88,34.77.5,47.78.5Z" />
                </clipPath>
            </svg>
        </>
    )
}

export function GlitchSvg () {
    return (
        <>
            <svg className="hiddenFilter">
                <defs>
                    <filter id="glitch1" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
                        primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
                        <feTurbulence id="fe1" type="turbulence" baseFrequency="0.01 0.1" numOctaves="2" seed="2" stitchTiles="stitch"
                            x="0%" y="0%" width="100%" height="100%" result="turbulence1" />

                        <feDisplacementMap in="SourceGraphic" in2="turbulence1" scale="20" xChannelSelector="R"
                            yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap" />
                    </filter>
                </defs>
            </svg>

            <svg className="hiddenFilter">
                <defs>
                    <filter id="glitch2" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
                        <feTurbulence id="fe2" type="turbulence" baseFrequency="0.015 0.1" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence" />
                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" result="displacementMap" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}
