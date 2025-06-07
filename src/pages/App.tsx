import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Productos from '../pages/productos';
import Señalenvivo from '../pages/Señalenvivo';
import logooo from '../assets/lgooooo.png';
import bannerImage from '../assets/banner.png';
import ReadNews from '../components/ReadNews';


const newsData = [
  {
    id: 1,
    title: "Adulto mayor fallece tras ser atropellado por bus del transporte público en Pudahuel rural",
    description: "El accidente ocurrió en la calle José Miguel Carrera, cerca de la parcela 45, y la víctima era un vecino del sector donde ocurrió el accidente.",
    imageUrl: "https://www.tropezon.cl/wp-content/uploads/2025/05/kjiu87y-321x260.png",
    url: "#"
  },
  {
    id: 2,
    title: "Diputada Viviana Delgado en conversación radial: No se ve apoyando a Carolina Tohá",
    description: "En un nuevo capítulo de la Red de Medios, la parlamentaria del Distrito 8 abordó temas presidenciales, corrupción y vivienda, en una conversación franca y cercana.",
    imageUrl: "https://www.tropezon.cl/wp-content/uploads/2025/05/KLJKYT.png",
    url: "#"
  },
  {
    id: 3,
    title: "Evacuan vuelo a Calama por amenaza de bomba",
    description: "Pasajero alertó sobre un bolso sospechoso al interior del avión. El GOPE inspeccionó la nave, descartando la presencia de explosivos. La DGAC activó sus protocolos de emergencia.",
    imageUrl: "https://www.tropezon.cl/wp-content/uploads/2025/05/ioiioio-370x260.png",
    url: "#"
  }
  // Puedes agregar más noticias aquí
];
function NewsList() {
  return (
    <section className="news-list container">
      {newsData.map(({ id, title, description, imageUrl, url }) => (
        <article key={id} className="news-item">
          <img src={imageUrl} alt={title} />
          <div className="news-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={url} className="read-more">Leer más</a>
            <ReadNews title={title} text={description} id={0} /> {/* Ahora lee título + resumen */}
          </div>
        </article>
      ))}
    </section>
  );
}

// Componente TopAnuncios con Like/Dislike
const anunciosData = [
  {
    id: 1,
    title: "Venta de bicicletas usadas en buen estado",
    description: "Ofrezco bicicletas usadas, ideales para ciudad y paseo. Contactar al 987654321.",
    imageUrl: "https://imgs.search.brave.com/qUZzzdmK051VZBQ65m0Lt5OfgmCqXJWEr1Z7JKjmzLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y2xhc2YubXgvMjAy/MC8xMi8yMi9CaWNp/Y2xldGFzLXVzYWRh/cy0yMDIwMTIyMjE2/MjM1MC4wNzU2MzUw/MDE1LmpwZw",
  },
  {
    id: 2,
    title: "Clases de reparación de celulares",
    description: "Aprende a reparar celulares con clases prácticas y fáciles. Zona Providencia.",
    imageUrl: "https://imgs.search.brave.com/lNKSarhRgTtOtdeuZ7U40GNFugZwYIQRlZFjHI2I3M4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcHJl/bmRlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMC9w/YXNvcy1wYXJhLXJl/cGFyYXItdW4tY2Vs/dWxhci5qcGc",
  },
  {
    id: 3,
    title: "Venta de plantas de interior",
    description: "Plantas saludables y bonitas para decorar tu hogar. Entrega a domicilio.",
    imageUrl: "https://imgs.search.brave.com/RjBY7GZ9pm5hFwGK55AwO3r51TSB7dXf_2VFvY5cu1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MjQvYzYvOGMvNWYv/bnVlc3Ryby1lc3Bh/Y2lvLWRlLXZlbnRh/LmpwZw",
  }
];

function TopAnuncios() {
  const [likes, setLikes] = React.useState({});
  const [dislikes, setDislikes] = React.useState({});

  const handleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDislike = (id) => {
    setDislikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <section className="news-list container">
      
      {anunciosData.map(({ id, title, description, imageUrl }) => (
        <article key={id} className="news-item">
          <img src={imageUrl} alt={title} />
          <div className="news-content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          
          <div className="like-dislike-container">
            <div className="btns-wrapper">
              <button className="btn-like" onClick={() => handleLike(id)}>👍 {likes[id] || 0}</button>
              <button className="btn-dislike" onClick={() => handleDislike(id)}>👎 {dislikes[id] || 0}</button>
            </div>
          </div>

        </article>
      ))}
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Tropezon Tu Diario. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function Inicio() {
  return (
    <>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        
        <img 
          src={bannerImage}
          
          alt="Descripción de la imagen" 
          style={{ maxWidth: "100%", height: "auto" }}
        />
        
      </div>

      <NewsList />

      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        
        <img 
          src={bannerImage}
          
          alt="Descripción de la imagen" 
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h2>Top Anuncios de la Comunidad</h2>
      </div>

      {/* Aquí insertamos la sección TopAnuncios */}
      <TopAnuncios />

      <Footer />
    </>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

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
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-open" : "nav-closed"}>
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Quien Somos</Link></li>
              <li><Link to="/Señalenvivo">Señal en Vivo</Link></li>
              <li>
                <button onClick={toggleDarkMode} style={{ padding: '0.5rem 1rem', marginTop: '0.5rem', cursor: 'pointer' }}>
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
export default App;
