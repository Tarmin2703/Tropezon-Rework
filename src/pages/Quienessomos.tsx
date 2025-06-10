import React from 'react';
import './Quienessomos.css';
import Footer from '../components/footer'; // ✅ Importas el Footer

const Quienessomos: React.FC = () => {
  return (
    <>
      <main className="quienessomos-container">
        <div className="content">
          <h1 className="title">Quiénes Somos</h1>
          <p className="description">
            Diario Tropezón es un medio de comunicación independiente que se enfoca en las comunas de Pudahuel y Cerro Navia, 
            orientado a entregar información local y nacional en la medida en que éstas afecten a los vecinos.
          </p>
          <p className="description">
            Nuestra labor se centra en dar a conocer la verdad sin apegos a colores políticos o intereses específicos, respetando 
            los distintos valores e ideologías presentes en la comunidad.
          </p>
          <p className="description">
            Buscamos promover la libertad de expresión en nuestras plataformas, motivando la participación de los vecinos y 
            dando espacio a su opinión. Nuestra meta es llegar con las noticias más relevantes y actuales con una visión local.
          </p>

          <div className="video-section">
            <div className="video-container">
              <h2 className="video-title">Nuestra Historia</h2>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/LYa1txWU_Cs?si=4qX9ofDHZoi7WJts"
                  title="Video de YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer /> {/* ✅ Aquí llamas al componente */}
    </>
  );
};

export default Quienessomos;
