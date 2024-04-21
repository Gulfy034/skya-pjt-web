import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="react-app"></div>';

const root = createRoot(document.getElementsByClassName('react-app'));
root.render(<span> Hello! World! </span>)