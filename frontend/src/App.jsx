import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TreeProvider } from './context/TreeContext';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import EcoGarden3D from './pages/base';
import EcoPlayShop from './pages/shop';
import StatsPage from './pages/stats';


function App() {
  return (
    <TreeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/garden" element={<EcoGarden3D />} />
            <Route path="/shop" element={<EcoPlayShop />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </div>
      </Router>
    </TreeProvider>
  );
}

export default App;
