//-----test online or offline

if (navigator.onLine){
    console.log("Online,yes");
} else {
    console.log("Offline,yes");
}

//-----test network changes

window.addEventListener("online", (e) => {
    console.log("NETWORK CHANGED: online");
})

window.addEventListener("offline", (e) => {
    console.log("NETWORK CHANGED: offline");
})