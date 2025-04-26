import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import "@styles/shared/_scrollbar.scss";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    const lenisRef = useRef<Lenis>(null);
    const rafHandle = useRef<number>(0);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            //easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        // scroll event
        const handleScroll = ({ scroll }: { scroll: number }) => {
            const scrollHeight = document.documentElement.scrollHeight
            const viewportHeight = window.innerHeight
            const maxScroll = scrollHeight - viewportHeight

            const progress = maxScroll > 0
                ? Math.min(1, scroll / maxScroll)
                : 0

            setProgress(progress * 100)
        }

        // looply call requestAnimationFrames
        const raf = (time: number) => {
            lenisRef.current?.raf(time)
            rafHandle.current = requestAnimationFrame(raf)
        }
        rafHandle.current = requestAnimationFrame(raf)

        // listen the scroll event
        lenisRef.current?.on('scroll', handleScroll)

        // clear event
        return () => {
            lenisRef.current?.off('scroll', handleScroll)
            lenisRef.current?.destroy()
            if (rafHandle.current) {
                cancelAnimationFrame(rafHandle.current)
            }
        }
    }, [])

    return (
        <div id="scrollProgress" style={{ width: `${progress}%` }}/>
    )
}

export default ScrollProgress;