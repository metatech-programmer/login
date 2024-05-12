import { Request, Response } from "express";
import RolDao from "../dao/RolDao";

class RolControlador extends RolDao {
  public cargarRoles(req: Request, res: Response): void {
    RolControlador.obtenerRoles(res);
  }
  public crearRoles(req: Request, res: Response): void {
    const params = Object.values(req.body);
    RolControlador.crearRoles(res, params);
  }
  public eliminarRoles(req: Request, res: Response): void {
    const params = Object.values(req.body);
    RolControlador.eliminarRoles(res, params);
  }
  public actualizarRoles(req: Request, res: Response): void {
    const params = Object.values(req.body);
    RolControlador.actualizarRoles(res, params);
  }
}
const rolControlador = new RolControlador();
export default rolControlador;
