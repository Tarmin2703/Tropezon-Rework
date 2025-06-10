import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logooo from '../assets/lgooooo.png';


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logooo} alt="Logo Tropezon" style={{ height: "100px" }} />
        </div>

        <button onClick={toggleMenu} className="menu-toggle">☰</button>

        <nav className={menuOpen ? "nav-open" : "nav-closed"}>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Quienessomos">Quien Somos</Link></li>
            <li><Link to="/Señalenvivo">Señal en Vivo</Link></li>
            <li><ThemeToggle /></li>
            <li><Link to="/login">Acceder</Link></li>
            <li><Link to="/registro">Registrarse</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
