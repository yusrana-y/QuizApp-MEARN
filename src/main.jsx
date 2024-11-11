import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import TokenContext from './contexts/TokenContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TokenContext>
          <App />
      </TokenContext>
    </BrowserRouter>
  </StrictMode>,
)
