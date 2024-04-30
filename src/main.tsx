import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index.tsx'

console.log("react app loaded")

ReactDOM.createRoot(document.getElementById('appinsert')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
