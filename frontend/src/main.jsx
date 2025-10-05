import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css' // Import your CSS styles
import HomePage from './pages/home'
import EcoPlayDashboard from './pages/dashboard'
import StatsPage from './pages/stats'
import EcoPlayShop from './pages/shop'
import EcoGarden3D from './pages/base'
import { TreeProvider } from './context/TreeContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TreeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<EcoPlayDashboard />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/shop" element={<EcoPlayShop />} />
          <Route path="/garden" element={<EcoGarden3D />} />
        </Routes>
      </BrowserRouter>
    </TreeProvider>
  </StrictMode>,
)
