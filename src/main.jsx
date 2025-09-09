import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Login,{Profile,Setting, UserKey} from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login />
    <Profile />
    <Setting />
    <h1>{UserKey}</h1>
  </StrictMode>,
)
