import React from "react";
import gsap from "gsap";
import '@styles/skya_introduci_03.scss';

export default function IntrThree() {
    return (
        <>
            
        </>
    )
}

//TODO: animate this part.

/*
const scrollbox = {
        container: document.querySelector(".scrollbox_container"),
        cards: [...document.querySelectorAll(".scrollbox_container_card")],
        trucks: [...document.querySelectorAll(".picsheet")],
        trigger_distance: 0,
        border_distance: 0,
        distance: 0,
        resize() {
            let _scrollbox = document.querySelector(".scrollbox");
            _scrollbox.style.height = `${this.container.offsetWidth}px`;
            this.trigger_distance = _scrollbox.offsetTop;
            this.border_distance = _scrollbox.offsetTop + _scrollbox.offsetHeight - innerHeight;
        },
        move() {
            if (scrollY >= this.trigger_distance &&
                scrollY <= this.border_distance) {
                this.distance = scrollY - this.trigger_distance;
                this.container.style.transform = `translateY(${this.distance}px)`;
                let distance_x =
                    this.distance / (this.border_distance - this.trigger_distance) *
                    (this.container.offsetWidth - innerWidth);
                for (let i = 0; i < this.cards.length; i++) {
                    this.cards[i].style.transform = `translateX(${-distance_x}px)`;
                }
            }
        }
    };
    scrollbox.resize();
    window.addEventListener("resize", () => {
        scrollbox.resize();
    });
    window.addEventListener("scroll", () => {
        scrollbox.move();
    });
*/