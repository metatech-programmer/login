import Jwt from "jsonwebtoken";
import { SQL_USUARIO } from "./../repositories/Usuario_sql";
import { Request, Response } from "express";
import pool from "../../../config/conexion/ConexionBase";
import { SQL_ACCESOS } from "../../accesos/repositories/Accesos_sql";
import Acceso from "../../accesos/entities/Acceso";

class UsuarioDao {
  protected static async obtenerUsuario(res: Response): Promise<any> {
    pool
      .result(SQL_USUARIO.TODOS, [])
      .then((registros: any) => {
        res.status(200).json(registros.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }
  protected static async crearUsuario(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_USUARIO.CREAR, params)
      .then((registros: any) => {
        res.status(200).json({
          respuesta:
            "YA SE CREO EL NUEVO USUARIO --> " +
            params.at(1) +
            " con número de identificación: " +
            params.at(5),
          registros: registros.rows,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }
  protected static async eliminarUsuario(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_USUARIO.ELIMINAR, params)
      .then((registros: any) => {
        console.log(registros.rowCount);

        if (registros.rowCount == 0) {
          res.status(400).json({
            respuesta: "No se elimino el usuario, no existe--> " + params.at(0),
          });
        } else {
          res.status(200).json({
            respuesta: "SE ELIMINO USUARIO --> " + params.at(0),
            registros: registros.rows,
          });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({
          respuesta:
            "No se pudo eliminar ya que esta siendo utilizado en otra tabla",
        });
      });
  }
  protected static async actualizarUsuario(
    res: Response,
    params: any[]
  ): Promise<any> {
    pool
      .result(SQL_USUARIO.ACTUALIZAR, params)
      .then((registros: any) => {
        if (registros.rowCount == 0) {
          res.status(400).json({
            respuesta:
              "No se actualizo el usuario, no existe--> " +
              params.at(params.length - 1),
          });
        } else {
          res.status(200).json({
            respuesta:
              "SE ACTUALIZO USUARIO --> " + params.at(params.length - 1),
            registros: registros.rows,
          });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "No se pudo actualizar" });
      });
  }

  protected static async crearUsuarioAcceso(
    nuevoUsu: any,
    nuevoAcceso: any,
    res: Response
  ): Promise<any> {
    pool
      .task(async (t) => {
        const usuario = await t.one(SQL_USUARIO.CREAR, nuevoUsu);
        nuevoAcceso.unshift(usuario.idUsuario);
        const acceso = await t.none(SQL_USUARIO.CREARACCESO, nuevoAcceso);
        
        const [correoAcceso, claveAcceso] = nuevoAcceso;
        const arrCorreoClave = [correoAcceso, claveAcceso]

        const tokencito = await t
          .result(SQL_ACCESOS.TOKEN, arrCorreoClave)
          .then((registros: any) => {
            const tokenFinal = Jwt.sign(registros.rows.at(0), process.env.SUPER_KEY || "LaSuperClaving", {
              expiresIn: "2h",
            });
            return tokenFinal;
          })
          .catch((miError) => {
            console.log(miError);
            res.status(400).json({ respuesta: "La consulta del token salio mal" });
          });

        return { usuario, acceso, tokencito };
      })
      .then((registros) => {
        res.status(200).json({
          respuesta: "YA SE CREO EL NUEVO USUARIO " + registros.usuario.idUsuario,
          token: registros.tokencito,
        });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "todo mal con la cosulta" });
      });
  }
}

export default UsuarioDao;
