import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Index from './routes/Index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>
  }
])

console.log("react componenets loaded");
console.log("react router loaded")

ReactDOM.createRoot(document.querySelector("appinsert")!).render(
  <React.StrictMode>
    <Index />
    <RouterProvider router={router}/>
  </React.StrictMode>
)