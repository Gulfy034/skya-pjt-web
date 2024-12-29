import React from 'react';
import { useState, useEffect } from "react";
import * as renderDebugging from 'react-device-detect';
import { useRouteError } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
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

//----- export vercel speed-insights into react compoment
export function VercelSpeedIs() {
    return(
        <>
            <SpeedInsights/>
        </>
    )
}