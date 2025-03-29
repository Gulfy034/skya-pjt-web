import React from "react";
import '@styles/skya_footer.scss';
import { useLocation } from "react-router-dom";

//TODO: animate footer
//TODO: i18n localize

function IndexFooter() {
    return (
        <footer>
            <div className="mainfoot">
                <p>"SKYA_PROJECT" and "SKYA_PROJECT_DEMO" are in development, the opensource DEMO version client is licensed under the GPLv3 License.
                </p>
                <hr />
                <p>This Page's hosted by <a href="http://vercel.com">Vercel</a></p>
                <p>Sourcecode is on <a href="http://github.com/Gulfy034/skya-pjt-web">Github</a></p>
            </div>
        </footer>
    )
}

function ErrorFooter() {
    return (
        <footer>
            <div className="auguroz_footer">
                <span>~#</span> there is nothing but there is another way to access this page!
            </div>
        </footer>
    )
}

export default function Footer() {
    const isIndex = useLocation();
    return (
        isIndex.pathname == '/' | '/Download' | '/About' | '/Contect'
                    ? (<IndexFooter />)
                    : (<ErrorFooter />)
    )
}
