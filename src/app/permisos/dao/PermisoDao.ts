import { Response } from "express";
import pool from "../../../config/conexion/ConexionBase";
import { SQL_PERMISO } from "../repositories/Permiso_sql";

class PermisoDao {
  protected static async obtenerPermiso(res: Response): Promise<any> {
    pool
      .result(SQL_PERMISO.TODOS, [])
      .then((registros: any) => {
        res.status(200).json(registros.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }
  protected static async crearPermiso(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_PERMISO.CREAR, params)
      .then((registros: any) => {
        res.status(200).json({
          respuesta: "Ya se creo el nuevo rol --> " + params.at(1),
          registros: registros.rows,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }
  protected static async eliminarPermiso(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_PERMISO.ELIMINAR, params)
      .then((registros: any) => {
        if (registros.rowCount==0) {
          res.status(400).json({
            respuesta: "No se elimino el permiso, no existe--> " + params.at(0),
            
          })
        } else {
          res.status(200).json({
            respuesta: "Se elimino el permiso--> " + params.at(0),
            registros: registros.rows, 
          })
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }
  protected static async actualizarPermiso(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_PERMISO.ACTUALIZAR, params)
      .then((registros: any) => {
        if (registros.rowCount==0) {
          res.status(400).json({
            respuesta: "No se elimino el permiso, no existe--> " + params.at(params.length-1),
            
          })
        } else {
          res.status(200).json({
            respuesta: "Se actualizo el rol --> " + params.at(params.length-1),
            registros: registros.rows,
          });
        }
       
       
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "No fue posible actualizar" });
      });
  }
}

export default PermisoDao;
