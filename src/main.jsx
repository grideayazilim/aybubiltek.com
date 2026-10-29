import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Kaydedilen temayı sayfa açılırken uygula (logo ile değiştiriliyor)
if (localStorage.getItem('biltekTheme') === 'dark') {
  document.body.classList.add('darkTheme')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
