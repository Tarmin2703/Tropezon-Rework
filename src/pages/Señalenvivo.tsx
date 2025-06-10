import React, { useEffect } from 'react';
import Footer from '../components/footer'; // ✅ Importas el Footer


const Señalenvivo: React.FC = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      console.warn("El SDK de Facebook no está cargado.");
    }
  }, []);

  return (
    <main style={{ padding: "1rem", maxWidth: "1280px", margin: "auto" }}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Señal en Vivo</h1>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
          {/* Sección del video en vivo de Facebook */}
          <div style={{ flex: "1 1 300px", maxWidth: "350px", backgroundColor: "#f0f2f5", padding: "1rem", borderRadius: "8px" }}>
            <h2 className="text-xl font-semibold mb-2">Medio a Medio, Conversación y Análisis</h2>
            <div style={{ position: "relative", width: "100%", paddingBottom: "177.77%", height: 0, overflow: "hidden" }}>
              <div className="fb-video"
                data-href="https://www.facebook.com/tropezonnoticias/videos/1789203101658640/"
                data-width="auto"
                data-height="auto"
                data-allowfullscreen="true">
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer /> {/* ✅ Aquí llamas al componente */}
    </main>
      
  );
};

export default Señalenvivo;
