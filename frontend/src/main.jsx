import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { HomePage, EcoPlayApp } from './App.jsx'
import StatsPage from './pages/stats'
import EcoPlayShop from './pages/shop'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<EcoPlayApp />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/shop" element={<EcoPlayShop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
