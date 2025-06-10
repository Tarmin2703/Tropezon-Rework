import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ThemeToggle.css'; // Importamos los estilos específicos

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Link to="#" className="theme-toggle" onClick={(e) => { e.preventDefault(); toggleDarkMode(); }}>
      Cambiar a tema {darkMode ? 'claro' : 'oscuro'}
    </Link>
  );
};

export default ThemeToggle;
