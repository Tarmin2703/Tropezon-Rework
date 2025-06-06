import React, { useEffect } from 'react';

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



export default Productos;