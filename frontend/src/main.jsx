import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css' // Import your CSS styles
import { HomePage, EcoPlayApp } from './App.jsx'
import StatsPage from './pages/stats'
import EcoPlayShop from './pages/shop'
import EcoGarden3D from './pages/base'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<EcoPlayApp />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/shop" element={<EcoPlayShop />} />
        <Route path="/garden" element={<EcoGarden3D />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
