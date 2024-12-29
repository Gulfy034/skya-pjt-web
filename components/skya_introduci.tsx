import React, { useState, useTransition } from "react";
import IntrOne from '@components/skya_introduci_01';
import IntrTwo from '@components/skya_introduci_02';
import IntrThree from '@components/skya_introduci_03';
import IntrFour from '@components/skya_introduci_04';
import '@styles/skya_introduci.scss';

//TODO: animated tranisition while router changed
//TODO: i18n localize
export default function Introduci() {
    //const [isPendinf, startTransition] = useTransition();
    //const [introduci, setIntroduci] = useState();
    return (
        <div className="container">
            <div>
                <hr className="hr_conf" attr-con="users ! welcome" />
            </div>

            <section className="aa">
                <IntrOne />
            </section>

            <div>
                <hr className="hr_conf" attr-con="introduce ? what" />
            </div>

            <section className="bb">
                <IntrTwo />
            </section>

            <div>
                <hr className="hr_conf" attr-con="something ~ else" />
            </div>

            <section className="cc">
                <IntrThree />
            </section>

            <div>
                <hr className="hr_conf" attr-con="board - notes" />
            </div>

            <section className="dd">
                <IntrFour />
            </section>
        </div>
    )
}

