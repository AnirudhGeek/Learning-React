import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Prac from './Prac.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Prac/>
  </StrictMode>,
)
