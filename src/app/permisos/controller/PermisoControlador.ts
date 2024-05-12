import { Request, Response } from "express";
import PermisoDao from "../dao/PermisoDao";

class PermisoControlador extends PermisoDao {
  public cargarPermiso(req: Request, res: Response): void {
    PermisoControlador.obtenerPermiso(res);
  }
  public crearPermiso(req: Request, res: Response): void {
    const params = Object.values(req.body);
    PermisoControlador.crearPermiso(res, params);
  }
  public eliminarPermiso(req: Request, res: Response): void {
    const params = Object.values(req.body);
    PermisoControlador.eliminarPermiso(res, params);
  }
  public actualizarPermiso(req: Request, res: Response): void {
    const params = Object.values(req.body);
    PermisoControlador.actualizarPermiso(res, params);
  }
}
const permisoControlador = new PermisoControlador();
export default permisoControlador;
