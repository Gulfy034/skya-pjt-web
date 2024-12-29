import React from "react";
import gsap from "gsap";
import Nav from '@components/skya_nav';
import Progress from '@components/skya_progress';

//TODO: gsap animations
//TODO:i18n localize
export default function Header() {
    return (
        <>
            <Nav />
            <Progress />
        </>
    )
}