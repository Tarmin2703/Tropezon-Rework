import React, { useState } from "react";

interface ReadNewsProps {
  title: string;
  text: string;
  id: number; // ID único para cada noticia
}

const ReadNews: React.FC<ReadNewsProps> = ({ title, text, id }) => {
  const [activeNewsId, setActiveNewsId] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null); // Estado para el botón específico

  const play = () => {
    const utterance = new SpeechSynthesisUtterance(`${title}. ${text}`);
    utterance.lang = "es-ES";

    utterance.onend = () => {
      setActiveNewsId(null);
      setActiveButton(null); // Desactivar botones al finalizar
    };

    window.speechSynthesis.cancel(); // Detiene cualquier audio previo
    window.speechSynthesis.speak(utterance);
    setActiveNewsId(id);
    setActiveButton("play"); // Solo activa el botón de play
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setActiveNewsId(id);
    setActiveButton("pause"); // Solo activa el botón de pausa
  };

  const reset = () => {
    window.speechSynthesis.cancel();
    setActiveNewsId(null);
    setActiveButton(null); // Desactiva todos los botones
  };

  return (
    <div className="read-news-buttons">
      <button
        onClick={play}
        className={`play ${activeNewsId === id && activeButton === "play" ? "active" : ""}`}
      >
        ▶️
      </button>
      <button
        onClick={pause}
        className={`pause ${activeNewsId === id && activeButton === "pause" ? "active" : ""}`}
      >
        ⏸️
      </button>
      <button onClick={reset} className="reset">🔄</button>
    </div>
  );
};

export default ReadNews;
/*a*/