import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/main.css'
import "./styles/tailwind.css"

createRoot(document.querySelector('#root')!).render(<App />)
