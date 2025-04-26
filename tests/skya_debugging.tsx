import React from "react";
import { useState, useEffect } from "react";
import * as renderDebugging from "react-device-detect";
import { useLocation, useRouteError } from "react-router-dom";
//import { expect, test } from "vitest";

// debugging console notes:
export function DbgOutputStatus() {
    console.log("React Version:" + React.version);
    console.log("React-Router loaded");
}

//----- network changes
export function DbgOutputNetwork() {
    const [online, setOnline] = useState(true);
    useEffect(() => {
        function handleOnline() {
            setOnline(true);
        }
        function handleOffline() {
            setOnline(false);
        }
        globalThis.addEventListener("online", handleOnline);
        globalThis.addEventListener("offline", handleOffline);
        return () => {
            globalThis.removeEventListener("online", handleOnline);
            globalThis.removeEventListener("offline", handleOffline);
        }
    }, []);
    return <h1>{online ? "Online" : "Offine"}</h1>
}

//----- force device is mobile
export const forceMobile = renderDebugging.isMobile == true;

//----- router status
export function DbgOutputRouter() {
    const dbgRouter = useRouteError();
    const path = useLocation();
    console.log("Error:", dbgRouter);
    console.log("CurrentRouter:", path);
}

//----- Vitest