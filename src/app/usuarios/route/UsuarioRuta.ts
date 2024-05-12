import { Router } from "express";
import usuarioControlador from "../controller/UsuarioControlador";
import cors from "cors";

class UsuarioRuta {
  public usuarioRutaApi: Router;
  constructor() {
    this.usuarioRutaApi = Router();
    this.lasRutas();
  }

  public lasRutas(): void {
    const corsOptions = {
      origin: true,
      optionsSuccessStatus: 200,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    };

    this.usuarioRutaApi.get(
      "/getuser",
      cors(corsOptions),
      usuarioControlador.cargarUsuario
    );
    this.usuarioRutaApi.post(
      "/createuser",
      cors(corsOptions),
      usuarioControlador.crearUsuario
    );
    this.usuarioRutaApi.post(
      "/createuserwithaccess",
      cors(corsOptions),
      usuarioControlador.crearUsuarioAcceso
    );
    this.usuarioRutaApi.delete(
      "/deleteuser",
      cors(corsOptions),
      usuarioControlador.eliminarUsuario
    );
    this.usuarioRutaApi.put(
      "/updateuser",
      cors(corsOptions),
      usuarioControlador.actualizarUsuario
    );
  }
}

const usuarioRuta = new UsuarioRuta();
export default usuarioRuta.usuarioRutaApi;
