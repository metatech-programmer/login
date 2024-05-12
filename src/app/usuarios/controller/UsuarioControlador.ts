import { Request, Response } from "express";
import UsuarioDao from "../dao/UsuarioDao";
import Usuario from "../entities/Usuario";
import Acceso from "../../accesos/entities/Acceso";

class UsuarioControlador extends UsuarioDao {
  public cargarUsuario(req: Request, res: Response): void {
    UsuarioControlador.obtenerUsuario(res);
  }
  public crearUsuarioAcceso(req: Request, res: Response): void {

    const usuario: Usuario = req.body;
    const { idRol, nombreUsuario, apellidoUsuario, tipoIdentificacionUsuario, numeroIdentificacionUsuario, direccionUsuario, telefonoUsuario } = usuario;
    const acceso: Acceso = req.body;
    const { correoAcceso, claveAcceso, estadoAcceso } = acceso;

    const nuevoUsu = [idRol, nombreUsuario, apellidoUsuario, tipoIdentificacionUsuario, numeroIdentificacionUsuario, direccionUsuario, telefonoUsuario];
    const nuevoAcceso = [correoAcceso, claveAcceso, estadoAcceso];

    UsuarioControlador.crearUsuarioAcceso(nuevoUsu, nuevoAcceso, res);

  }
  public eliminarUsuario(req: Request, res: Response): void {
    const params = Object.values(req.body);
    UsuarioControlador.eliminarUsuario(res, params);
  }
  public actualizarUsuario(req: Request, res: Response): void {
    const params = Object.values(req.body);
    UsuarioControlador.actualizarUsuario(res, params);
  }

  public crearUsuario(req: Request, res: Response): void {
    const params = Object.values(req.body);
    UsuarioControlador.crearUsuario(res, params);

  }
}
const usuarioControlador = new UsuarioControlador();
export default usuarioControlador;
