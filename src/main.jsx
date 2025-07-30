import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostsList from "./PostsList";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PostsList />

  </StrictMode>,
)
