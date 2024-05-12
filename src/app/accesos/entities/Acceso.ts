import Usuario from "../../usuarios/entities/Usuario";

class Acceso {
  public idUsuario: Usuario;
  public correoAcceso: string;
  public claveAcceso: string;
  public estadoAcceso: number;
  constructor(idUsu: Usuario, correo: string, clave: string, estado: number) {
    this.idUsuario = idUsu;
    this.correoAcceso = correo;
    this.claveAcceso = clave;
    this.estadoAcceso = estado;
  }
}

export default Acceso;
