import React, { useState } from "react";
import { createPortal } from "react-dom";
import "@styles/skya_floatwindow.scss";

//TODO: make modal window available and animated.
const [smodalVisible, setSmodalVisible] = useState(false);
const smodalControl = {
    visible: smodalVisible,
    closeMe: () => {
        setSmodalVisible(false);
    },
};

export function Smodal() {
    return (
        <>
        </>
    );
}

// another popon window

function PopUtil({ PopChildren }: any) {
    return (
        <>
            {PopChildren}
        </>
    )
}

export function PopWindow() {
    return (
        <div className="popbox" id="popbox">
            <div className="popcontent" id="popcontent">
                {createPortal(
                    <PopUtil>
                        <p>this is just a content.</p>
                    </PopUtil>,
                document.body
                )}
            </div>
            <div className="closepop">closeIt</div>
        </div>
    );
}