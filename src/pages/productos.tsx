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
            <h1 className="text-2xl font-bold mb-2">Quien Somos</h1>
            <p>Diario Tropezón es un medio de comunicación independiente que se enfoca en las comunas de Pudahuel y Cerro Navia, orientado a entregar información local y nacional en la medida en que éstas afecten a los vecinos.

Nuestra labor se centra en dar a conocer la verdad sin apegos a colores políticos o a intereses específicos y buscamos respetar los distintos valores e ideologías que puedan estar presentes en la comunidad.

Intentamos promover la libertad de expresión en nuestras diferentes plataformas, motivando la participación de los vecinos y dando espacio a su opinión.

Nuestra meta es llegar con las noticias más relevantes, pertinentes y actuales con una visión local.</p>

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
              <div
                className="order-1" // Asigna order-1 para que aparezca primero
                style={{
                  flex: "1 1 450px", // Base flexible
                  maxWidth: "500px",
                  backgroundColor: "#f0f2f5",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  boxSizing: "border-box"
                }}
              >

                {/* Contenedor responsivo para el video - CLAVE PARA FORMATO HORIZONTAL */}
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                  <iframe
                    src="https://www.youtube.com/embed/LYa1txWU_Cs?si=4qX9ofDHZoi7WJts" // <-- ¡REEMPLAZA ESTA URL CON TU VIDEO DE YOUTUBE REAL!
                    title="Video de YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                  ></iframe>
                </div>
              </div>

              {/* SEGUNDO VIDEO: De Facebook (ahora el segundo visualmente) */}
              
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Productos;