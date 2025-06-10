import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer'; // ✅ Asegúrate de que el path sea correcto

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registro con:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-10 space-y-10">
          
          {/* Imagen */}
          <div className="flex justify-center">
            <img 
              src="https://www.tropezon.cl/wp-content/uploads/2023/02/club01-300x300.jpg"
              alt="Logo"
              className="w-80 h-auto object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Encabezado */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Crea tu cuenta</h2>
            <p className="mt-3 text-lg text-gray-500">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Inicia sesión
              </Link>
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleRegister} className="space-y-10">
            <div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-5 py-4 text-base border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-5 py-4 text-base border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-black text-white text-xl rounded-xl hover:bg-gray-900 transition duration-300 font-semibold"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Footer al final */}
      <Footer />
    </div>
  );
};

export default Registro;
