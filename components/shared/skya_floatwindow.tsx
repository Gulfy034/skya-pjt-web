import { SkyaBtnDefault } from "@components/shared/skya_button";
import "@styles/skya_floatwindow.scss";

//TODO: animate the modal window.

const modalUtils = (
    <>
        <h1 className="modalTitle">

        </h1>
        <p className="modalContent">

        </p>
    </>
)

export default function Smodal() {
    return (
        <dialog className="smodalBox">
            <SkyaBtnDefault />
            <form id="smodalContent" action="">
                {modalUtils}
            </form>
        </dialog>
    );
}