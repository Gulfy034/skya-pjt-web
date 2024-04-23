import { ReactTyped } from "react-typed";
/* in order to load probably during long-time ------------

import axios from 'axios';

const fetcher = () => axios.get(url).then(res => res.data)

add these code ↑↑↑-----------------*/

const skyaTityped = () => (
    <div>
        <ReactTyped
            startWhenVisible
            strings={[
                "so we call it that...", "suno koncated yet another project?"
            ]}
            typeSpeed={35}
            loop
        />
        <br />
    </div>
)