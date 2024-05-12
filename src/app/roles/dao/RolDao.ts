import { Request, Response } from "express";
import pool from "../../../config/conexion/ConexionBase";
import { SQL_ROL } from "../repositories/Rol_sql";

class RolDao {
  protected static async obtenerRoles(res: Response): Promise<any> {
    pool
      .result(SQL_ROL.TODOS, [])
      .then((registros: any) => {
        res.status(200).json(registros.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }

  protected static async crearRoles(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_ROL.CREAR, params)
      .then((registros: any) => {
        res.status(200).json({
          respuesta: "Se creo el rol --> " + params.at(1),
          registros: registros.rows,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "No fue posible crear" });
      });
  }
  protected static async eliminarRoles(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_ROL.ELIMINAR, params)
      .then((registros: any) => {
        if (registros.rowCount==0) {
          res.status(400).json({
            respuesta: "No se elimino el rol, no existe--> " + params.at(0),
          })
        } else {
          res.status(200).json({
            respuesta: "Se elimino el rol --> " + params.at(0),
            registros: registros.rows,
          });
        }
        
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "No fue posible eliminar" });
      });
  }

  protected static async actualizarRoles(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_ROL.ACTUALIZAR, params)
      .then((registros: any) => {
        if (registros.rowCount==0) {
          res.status(400).json({
            respuesta: "No se elimino el rol, no existe--> " + params.at(params.length-1),
            
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

export default RolDao;
