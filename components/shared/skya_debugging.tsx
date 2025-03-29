import React from 'react';
import { useState, useEffect } from "react";
import * as renderDebugging from 'react-device-detect';
import { useRouteError } from "react-router-dom";

// debugging console notes:
export function DbgOutputStatus() {
    console.log('React Version:' + React.version);
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
        globalThis.addEventListener('online', handleOnline);
        globalThis.addEventListener('offline', handleOffline);
        return () => {
            globalThis.removeEventListener('online', handleOnline);
            globalThis.removeEventListener('offline', handleOffline);
        }
    }, []);
    return <h1>{online ? 'Online' : 'Offine'}</h1>
}

//----- force device is mobile
renderDebugging.isMobile == true;

//----- router status
export function DbgOutputRouter() {
    const dbgRouter = useRouteError();
    console.log('Error:', dbgRouter);
}