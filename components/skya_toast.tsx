import React from "react";
import { useNotification } from "@hooks/use-notification";
import '@styles/skya_toast.scss';

export function notify() {
  Notification.requestPermission().then(perm => {
    perm === "granted"
    ? new Notification("DbgNotify", {
      body: "This is the body of the notifcation",
      icon: "/imgs/trigon_pixel_32x32.svg"
    })
    : console.log("Unable to Notify!");
  })
}

export default function Toast() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-center");

  return (
    <div className="toast">
      {NotificationComponent}
      <h1>Toast Component</h1>
      <div className="btns">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success message!",
              duration: 3000,
              animation: "pop",
            })
          }
        >
          Show Success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "This is an info message!",
              duration: 3000,
            })
          }
        >
          Show Info
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "This is a warning message!",
              duration: 3000,
            })
          }
        >
          Show Warning
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "This is an error message!",
              duration: 3000,
            })
          }
        >
          Show Error
        </button>
      </div>
    </div>
  );
}