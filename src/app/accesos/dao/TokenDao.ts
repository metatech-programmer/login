import { SQL_ACCESOS } from "../repositories/Accesos_sql";
import { Response } from "express";
import Jwt from "jsonwebtoken";
import pool from "../../../config/conexion/ConexionBase";
import { log } from "console";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

class TokenDao {
  protected static async generar(res: Response, params: any[]): Promise<any> {
    const [numeroIdentificacionUsuario, claveAcceso] = params;
    pool
      .result(SQL_ACCESOS.TOKEN, numeroIdentificacionUsuario)
      .then(async (registros: any) => {
        const coincidir = await bcrypt.compare(
          claveAcceso,
          registros.rows.at(0).claveAcceso
        );
        if (coincidir) {
          const token = Jwt.sign(
            registros.rows.at(0),
            process.env.SUPER_KEY || "LaSuperClave",
            { expiresIn: "2h" }
          );

          res.status(200).json({
            jwt: token,
            usuario: registros.rows.at(0),
          });
        } else {
          res.status(400).json({ respuesta: "credenciales incorrectas" });
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "La consulta salio mal" });
      });
  }
}

export default TokenDao;
