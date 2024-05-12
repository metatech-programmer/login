import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rolUsuario");
  const user = localStorage.getItem("nombreUsuario");


  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-[url(https://alcadia.vercel.app/tunja.png)] bg-no-repeat bg-cover min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          ¡Bienvenid@ {user} nuestra aplicación!
          
        </h1>
        <p className="text-gray-600 mb-8">
          Descubre tu rol de {rol} en nuestra innovadora aplicación.
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={cerrarSesion}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
