import React from 'react'
import ReactDOM from 'react-dom/client'
import errPageInsert from './skya_404.tsx'

console.log("react app loaded")

ReactDOM.createRoot(document.getElementById('errinsert')!).render(
  <React.StrictMode>
    <errPageInsert />
  </React.StrictMode>,
)