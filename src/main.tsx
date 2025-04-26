import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReactLenis } from "lenis/react";

import IndexPage from "./routes/route_Index";
import DownloadPage from "./routes/route_Download";
import AboutPage from "./routes/route_About";
import ContectPage from "./routes/route_Contect";
import Error404Page from "./routes/route_404";

import "@components/shared/skya_languageSet";


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
      }}
      root>
      <RouterProvider router={root} />
    </ReactLenis>
  </React.StrictMode>
);