import { useCallback } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useCallback(() => {
    localStorage.clear();
  }, []);
  return (
    <div className="bg-[url(https://alcaldia-beige.vercel.app/tunja.png)] bg-no-repeat bg-cover min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          ¡Bienvenido a nuestra aplicación!
        </h1>
        <p className="text-gray-600 mb-8">
          Descubre un mundo de posibilidades con nuestra innovadora aplicación.
          ¡Únete a nosotros en un emocionante viaje!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="bg-transparent hover:bg-indigo-500 text-indigo-500 hover:text-white font-bold py-2 px-4 border border-indigo-500 hover:border-transparent rounded transition duration-300"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
