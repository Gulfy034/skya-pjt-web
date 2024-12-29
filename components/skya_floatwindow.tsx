import React from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import currentLang from "@compoments/languaageSet";
import '@styles/skya_floatwindow.scss';

const modal = document.getElementById("modalbox");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

//TODO: make modal window available and animated.

/*
const modalDom = document.querySelector('#modalbox');
const modalInsert = createRoot(modalDom);
modalInsert.render(
  <canvas is="modalbox">
    <button id="openModal">Open the modal</button>

    <dialog id="modal">
      <p>Modal content. Click the below button or press the escape key to close.</p>
      <button id="closeModal">Close this modal</button>
      <p>test paragragh.</p>
    </dialog>
  </canvas>
)

function showModal() {

}

if (modal) {
  openModal &&
    openModal.addEventListener("click", () => modal.showModal());

  closeModal &&
    closeModal.addEventListener("click", () => modal.closeModal());
}
*/