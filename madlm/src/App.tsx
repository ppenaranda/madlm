import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Services from './views/Services';
import Esperanza from './views/Esperanza';
import Poemas from './views/Poemas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/esperanza" element={<Esperanza />} />
            <Route path="/poemas" element={<Poemas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
