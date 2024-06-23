import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/skya_404.tsx'

console.log("react app loaded")

ReactDOM.createRoot(document.querySelector('#errinsert')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)