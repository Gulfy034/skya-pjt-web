import { createContext, useContext } from "react";

// custom a modal context hook to attach the provider.

// type modalContentFrom = "default" | "langSelect" | "settings"; // different modal types within different contents

type ModalContextType = {
    modalVisble: boolean;
    openModal: (/* type: modalContentFrom */) => void;
    closeModal: () => void;
    // modalContentFrom: modalContentFrom;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider!");
    }
    return context;
}