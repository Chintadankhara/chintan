import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
// import { App } from './App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Ap/> */}
  </StrictMode>,
)
