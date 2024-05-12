import { Response } from "express";
import pool from "../../../config/conexion/ConexionBase";
import { SQL_ACCESOS } from "../repositories/Accesos_sql";

class AccesoDao {
  protected static async obtenerAcceso(res: Response): Promise<any> {
    pool
      .result(SQL_ACCESOS.TODOS, [])
      .then((registros: any) => {
        res.status(200).json(registros.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "La consuta salio mal" });
      });
  }
  protected static async crearAcceso(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_ACCESOS.CREAR, params)
      .then((registros: any) => {
        res.status(200).json({
          respuesta: "Se creo el nuevo acceso --> " + params.at(1),
          registros: registros.rows,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "La consulta salio mal" });
      });
  }
  protected static async eliminarAcceso(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_ACCESOS.ELIMINAR, params)
      .then((registros: any) => {
        if (registros.rowCount==0) {
          res.status(400).json({
            respuesta: "No se elimino el permiso, no existe--> " + params.at(0),
          })
        } else {
          res.status(200).json({
            respuesta: "Se elimino el acceso --> " + params.at(0),
            registros: registros.rows,
          });
        }
        
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "La consulta salio mal" });
      });
  }
  protected static async actualizarAcceso(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_ACCESOS.ACTUALIZAR, params)
      .then((registros: any) => {
        if (registros.rowCount==0) {
          res.status(400).json({
            respuesta: "No se actualizo el acceso, no existe--> " + params.at(params.length-1),
          })
        } else {
          res.status(200).json({
            respuesta: "Se actualizo el acceso --> " + params.at(params.length-1),
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

export default AccesoDao;
