import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index.tsx'

console.log("react inserted & loaded")

ReactDOM.createRoot(document.querySelector("appinsert")!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)