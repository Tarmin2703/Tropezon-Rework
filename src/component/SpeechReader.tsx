import { useState } from "react";

const SpeechReader = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSpeak = () => {
    if (!text) return;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synth.speak(utterance);
  };

  const handlePause = () => {
    synth.pause();
    setIsSpeaking(false);
  };

  const handleResume = () => {
    synth.resume();
    setIsSpeaking(true);
  };

  const handleRestart = () => {
    synth.cancel();
    handleSpeak();
  };

  return (
    <div className="relative flex flex-col items-center mt-2">
  {/* 🔊 Botón Principal con su propia clase */}
  <button
    onClick={toggleMenu}
    className={`speech-toggle-btn ${isOpen ? "mb-2" : ""}`}
  >
    🔊
  </button>


      {/* 🔽 Menú desplegable con diseño mejorado */}
      {isOpen && (
  <div className="speech-menu">
    <button onClick={handleSpeak} disabled={isSpeaking} className="speech-btn">
      📢 Leer
    </button>
    <button onClick={handlePause} className="speech-btn">
      ⏸️ Pausar
    </button>
    <button onClick={handleResume} className="speech-btn">
      ▶️ Reanudar
    </button>
    <button onClick={handleRestart} className="speech-btn">
      🔄 Reiniciar
    </button>
  </div>
)}

    </div>
  );
};

export default SpeechReader;
