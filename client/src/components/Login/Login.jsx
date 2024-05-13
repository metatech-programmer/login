import { useCallback, useState } from "react";
import Image from "../../assets/image.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [credenciales, setCredenciales] = useState(
    "Por favor, ingresa tus datos"
  );
  const [color, setColor] = useState("text-black");
  const [numeroIdentificacionUsuario, setnumeroIdentificacionUsuario] =
    useState("");
  const [claveAcceso, setclaveAcceso] = useState("");

useCallback(
  () => {
    localStorage.clear();
  },
  [],
)


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://login-dun-five.vercel.app/api/token/gettoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numeroIdentificacionUsuario, claveAcceso }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem(
          "nombreUsuario",
          data.usuario.nombreUsuario + " " + data.usuario.apellidoUsuario
        );
        localStorage.setItem("rolUsuario", data.usuario.nombreRol);
        navigate("/home");
      } else {
        setColor("text-red-500 font-semibold");
        setCredenciales(
          "Credenciales incorrectas, verificalas e intenta nuevamente"
        );
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex">
      <div className="hidden md:flex bg-[url(https://alcaldia-beige.vercel.app/tunja.png)] items-center justify-center w-1/2 h-screen bg-no-repeat bg-cover"/>
      <div className="flex-1 h-screen overflow-y-scroll">
        <div className="mx-auto w-4/5 flex flex-col justify-center h-full">
          <div className="self-center pt-20">
            <img src={Image} alt="" className="w-1/2 mx-auto my-8" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">¡Bienvenido de nuevo!</h2>
            <p className="text-xl font-normal mt-2 mb-10">
              <span className={color}>{credenciales}</span>
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                name="numeroIdentificacionUsuario"
                value={numeroIdentificacionUsuario}
                onChange={(e) => setnumeroIdentificacionUsuario(e.target.value)}
                placeholder="No. de cedula"
                className="w-full p-4 mb-4 border-b-2 border-black outline-none"
                required
              />
              <div className="relative">
                <input
                  type={mostrarContraseña ? "text" : "password"}
                  name="claveAcceso"
                  value={claveAcceso}
                  onChange={(e) => setclaveAcceso(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full p-4 mb-4 border-b-2 border-black outline-none"
                  required
                />
                <div
                  className="absolute bottom-5 right-3 m-2 text-2xl cursor-pointer"
                  onClick={() => setMostrarContraseña(!mostrarContraseña)}
                >
                  {mostrarContraseña ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <div className="flex justify-end mb-10">

                <Link to={"/login"} className="text-lg hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="bg-black text-white py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 border-2 border-black"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>

          <p className="text-center text-lg mt-10 pb-10">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="font-semibold hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
