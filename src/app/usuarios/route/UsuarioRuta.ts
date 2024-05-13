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

    this.usuarioRutaApi.get(
      "/getuser",
      usuarioControlador.cargarUsuario
    );
    this.usuarioRutaApi.post(
      "/createuser",
      usuarioControlador.crearUsuario
    );
    this.usuarioRutaApi.post(
      "/createuserwithaccess",
      usuarioControlador.crearUsuarioAcceso
    );
    this.usuarioRutaApi.delete(
      "/deleteuser",
      usuarioControlador.eliminarUsuario
    );
    this.usuarioRutaApi.put(
      "/updateuser",
      usuarioControlador.actualizarUsuario
    );
  }
}

const usuarioRuta = new UsuarioRuta();
export default usuarioRuta.usuarioRutaApi;
