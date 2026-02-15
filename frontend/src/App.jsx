import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TreeProvider } from './context/TreeContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Garden from "./pages/Garden";
import Shop from './pages/Shop';
import Stats from './pages/Stats';


function App() {
  return (
    <TreeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </TreeProvider>
  );
}

export default App;
