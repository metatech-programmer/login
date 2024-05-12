import { Request, Response } from "express";
import AccesoDao from "../dao/AccesoDao";
import bcrypt from "bcrypt";

class AccesoControlador extends AccesoDao {
  public cargarAcceso(req: Request, res: Response): void {
    AccesoControlador.obtenerAcceso(res);
  }
  public crearAcceso(req: Request, res: Response): void {
    req.body.claveAcceso = bcrypt.hashSync(req.body.claveAcceso, 12);
    const params = Object.values(req.body);
    AccesoControlador.crearAcceso(res, params);
  }
  public eliminarAcceso(req: Request, res: Response): void {
    const params = Object.values(req.body);
    AccesoControlador.eliminarAcceso(res, params);
  }
  public actualizarAcceso(req: Request, res: Response): void {
    req.body.claveAcceso = bcrypt.hashSync(req.body.claveAcceso, 12);
    const params = Object.values(req.body);
    //console.log(params);
    
    AccesoControlador.actualizarAcceso(res, params);
  }
}
const accesoControlador = new AccesoControlador();
export default accesoControlador;
