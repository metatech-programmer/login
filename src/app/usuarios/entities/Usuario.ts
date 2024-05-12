import Rol from "../../roles/entities/Rol";

class Usuario {
  public idUsuario: number;
  public idRol: Rol;
  public nombreUsuario: string;
  public apellidoUsuario: string;
  public tipoIdentificacionUsuario: string;
  public numeroIdentificacionUsuario: string;
  public direccionUsuario: string;
  public telefonoUsuario: string;

  constructor(
    id: number,
    idRol: Rol,
    nom: string,
    ape: string,
    tipoId: string,
    numId: string,
    direc: string,
    telef: string
  ) {
    this.idUsuario = id;
    this.idRol = idRol;
    this.nombreUsuario = nom;
    this.apellidoUsuario = ape;
    this.tipoIdentificacionUsuario = tipoId;
    this.numeroIdentificacionUsuario = numId;
    this.direccionUsuario = direc;
    this.telefonoUsuario = telef;
  }
}

export default Usuario;
