import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import CallFun from './User.jsx'
import Bpp from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CallFun />
    <Bpp />
  </StrictMode>,
)
