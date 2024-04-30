// using gsap and lenis make page smooth-scrolling
// import { Lenis } from "lenis/react"

// gsap.registerPlugin(ScrollTrigger);



import Lenis from "lenis"

const lenis = new Lenis()

/*

lenis.on('scroll', (e) => {
    console.log(e)
})

*/

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf);