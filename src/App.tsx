import './App.css'
import SpeechReader from "./component/SpeechReader";


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Tropezon</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Mundo</a></li>
            <li><a href="#">Política</a></li>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">Tecnología</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

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
]
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

            {/* ✅ Nueva clase para estilizar desde CSS */}
            <div className="speech-reader-container">
              <SpeechReader text={`${title}. ${description}`} />
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
  )
}

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem', maxWidth: '1280px', margin: 'auto' }}>
        <NewsList />

        {/* Sección de video de YouTube */}
        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <br />
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', margin: 'auto' }}>
            <iframe
              src="https://www.youtube.com/embed/LYa1txWU_Cs" // Reemplaza con tu video real
              title="Video de YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </section>

        {/* Sección de imagen destacada */}
        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <br />

          <img
            src="https://www.tropezon.cl/wp-content/uploads/2023/02/club01-230x230.jpg"
            alt="Foto destacada"
            style={{ maxWidth: '100%', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}


export default App
