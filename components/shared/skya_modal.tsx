import { useState } from "react";
import ReactModal from "react-modal";

import { ModalTitle } from "@components/shared/skya_titles";

import { ModalContext, useModal } from "@hooks/useModal";

import "@styles/skya_modal.scss";

/*
TODO:
animate the modal window.
call lenis background stop() while opening, and start() while closing
*/

function ModalUtils() {
    return (
        <>
            <ModalTitle />
            <p id="modalTexts"></p>
        </>
    )
}

export function Modal() {
    const { modalVisble, closeModal } = useModal();
    ReactModal.setAppElement("#layout");
    return (
        <ReactModal
            aria={{
                labelledby: "langSet",
            }}
            isOpen={modalVisble}
            id={"modalBox"}
            className={"modalBox"}
            overlayClassName={"modalOverlay"}
            contentLabel={"Popup Modal"}
            onRequestClose={closeModal}
            shouldCloseOnEsc={true}
            role={"dialog"}
        >
            <ModalUtils />
        </ReactModal>
    )
}

// !!! If you are using async-load components or REACT-ROUTER, please let <ModalProvider></ModalProvider> include your entry/router component of the file !!!

// Use your react browser dev panel to check related errors!

export default function ModalProvider({ children }: { children: React.ReactNode }) {
    const [modalVisble, setModalVisble] = useState<boolean>(false);
    // const [modalContentFrom, setModalContentFrom] = useState<string | null >(null);

    const openModal = () => setModalVisble(true);
    const closeModal = () => setModalVisble(false);

    // const verify = useMemo(() => ({
    //     modalVisble,
    //     openModal: () => setModalVisble(true),
    //     closeModal: () => setModalVisble(false),
    //     modalContentFrom,
    // }), [modalVisble]);

    return (
        <ModalContext.Provider value={{ modalVisble, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}