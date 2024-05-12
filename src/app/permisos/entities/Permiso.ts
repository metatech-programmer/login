import Rol from "../../roles/entities/Rol";

class Permiso {
  public idPermiso: number;
  public idRol: Rol;
  public nombrePermiso: string;

  constructor(id: number, idRol: Rol, nom: string) {
    this.idPermiso = id;
    this.idRol = idRol;
    this.nombrePermiso = nom;
  }
}

export default Permiso;
