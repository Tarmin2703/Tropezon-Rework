
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from '../pages/App';
import Señalenvivo from '../pages/Señalenvivo';
import logooo from '../assets/lgooooo.png';



const Productos: React.FC = () => {
  useEffect(() => {
    // Este useEffect sigue siendo necesario si mantienes el video de Facebook.
    // Si ambos videos fueran de YouTube, podrías eliminar este useEffect
    // y la necesidad del SDK de Facebook en public/index.html.
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      console.warn("El SDK de Facebook no está cargado. Asegúrate de que el script del SDK esté en public/index.html.");
    }
  }, []);

  return (
    <>
      <header className="header">
        <main style={{ padding: "1rem", maxWidth: "1280px", margin: "auto" }}>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Señal en Vivo</h1>
            <p></p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "2rem"
              }}
            >
              {/* PRIMER VIDEO: De YouTube (ahora el primero visualmente) */}
              

              {/* SEGUNDO VIDEO: De Facebook (ahora el segundo visualmente) */}
              <div
                className="order-2" // Asigna order-2 para que aparezca segundo
                style={{
                  flex: "1 1 300px", // Reducimos la base del ancho para el formato vertical (ej. 300px)
                  maxWidth: "350px", // Un poco más ancho que la base, para pantallas un poco mayores
                  backgroundColor: "#f0f2f5",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  boxSizing: "border-box"
                }}
              >
                <h2 className="text-xl font-semibold mb-2">Medio a Medio, Conversacion y análisis</h2>
                {/* Contenedor responsivo para el video - CLAVE PARA FORMATO VERTICAL */}
                <div style={{ position: "relative", width: "100%", paddingBottom: "177.77%", height: 0, overflow: "hidden" }}>
                  <div
                    className="fb-video" // Si es Facebook, usa fb-video
                    data-href="https://www.facebook.com/tropezonnoticias/videos/1789203101658640/" // Mantén tu video principal de Facebook aquí
                    data-width="auto"
                    data-height="auto"
                    data-allowfullscreen="true"
                    data-show-captions="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
    
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  // Opcional: cerrar menú al cambiar ruta
  useEffect(() => {
    const closeMenuOnRouteChange = () => setMenuOpen(false);
    window.addEventListener('popstate', closeMenuOnRouteChange);
    return () => window.removeEventListener('popstate', closeMenuOnRouteChange);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div className="logo" style={{ flex: "0 0 auto" }}>
            <img src={logooo} alt="Logo Tropezon" style={{ height: "100px" }} />
          </div>

          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-open" : "nav-closed"}>
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Quien Somos</Link></li>
              <li><Link to="/Señalenvivo">Señal en Vivo</Link></li>
              <li>
                <button onClick={toggleDarkMode} className="btn-theme-toggle" style={{ padding: '0.5rem 1rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                  Cambiar a tema {darkMode ? 'claro' : 'oscuro'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ padding: "1rem", maxWidth: "1280px", margin: "auto" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/Señalenvivo" element={<Señalenvivo />} />
        </Routes>
      </main>
    </>
  );
}

export default Productos;