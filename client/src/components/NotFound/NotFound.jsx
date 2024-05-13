
const NotFound = () => {
  return (
    <div className="bg-[url(https://alcaldia-beige.vercel.app/tunja.png)] bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">404 - Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe. ¿Por qué no intentas buscar algo más?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => window.history.back()}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Volver a la página anterior
          </button>
          <a
            href="https://www.tunja-boyaca.gov.co/" target="_blank" rel="noopener noreferrer" 
            className="bg-transparent hover:bg-indigo-500 text-indigo-500 hover:text-white font-bold py-2 px-4 border border-indigo-500 hover:border-transparent rounded transition duration-300"
          >
            Buscar algo más
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
