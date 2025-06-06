// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Inicio</Link>
      <Link to="/productos" className="hover:underline">Productos</Link>
      {/* Puedes seguir agregando más enlaces aquí */}
    </nav>
  );
};

export default Navbar;