import Permiso from "../../permisos/entities/Permiso";
import Usuario from "../../usuarios/entities/Usuario";

class PermisoUsuario {
  public idUsuario: Usuario;
  public idPermiso: Permiso;

  constructor(idUsu: Usuario, idPer: Permiso) {
    this.idUsuario = idUsu;
    this.idPermiso = idPer;
  }
}

export default PermisoUsuario;
