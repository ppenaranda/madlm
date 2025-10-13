import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Más Allá de los Muros</Link>
        </div>
        
        {/* Botón hamburguesa para móvil */}
        <button 
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Mochila Andariega
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/esperanza" 
              className={`nav-link ${location.pathname === '/esperanza' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Esperanza
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/poemas" 
              className={`nav-link ${location.pathname === '/poemas' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Poemas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
