import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ReactLenis } from "lenis/react";

import IndexPage from "./routes/route_Index";
import DownloadPage from "./routes/route_Download";
import AboutPage from "./routes/route_About";
import ContectPage from "./routes/route_Contect";
import Error404Page from "./routes/route_404";

import "@components/shared/skya_languageSet";
import ModalProvider from "@components/shared/skya_modal";


const root = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/Download",
        element: <DownloadPage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Contect",
        element: <ContectPage />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.querySelector("#layout")!).render(
  <React.StrictMode>
    <ReactLenis
      options={{
        syncTouch: true,
        duration: 0.5
      }}
      root>
      <ModalProvider>
        <RouterProvider router={root} />
      </ModalProvider>
    </ReactLenis>
  </React.StrictMode>
);