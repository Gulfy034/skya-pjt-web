import React from "react";
import gsap from "gsap";
import styled from "styled-components";
import { createRoot } from "react-dom/client";
import { useNotification } from "/hooks/use-notification.jsx";
import "/src/styles/skya_toast.scss";

const { NotificationComponent, triggerNotification } =
  useNotification("top-center");

const toastDom = document.querySelector("#toast");
const toastInsert = createRoot(toastDom)
toastInsert.render(
  <>
    <div id="toastBox">
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
  </>
)