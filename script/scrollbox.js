let scrollbox = document.getElementsByClassName("scrollbox")[0];
function resize_body() {
    let height = scrollbox.offsetHeight;
    document.body.style.height = `${height}px`;
};

function scroll() {
    scrollbox.style.transform = `translateY(${-scrollY}px)`;

window.addEventListener("load", resize_body);
window.addEventListener("resize", resize_body);
}