import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
dotenv.config();

class Seguridad {
  public revisar(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      res.status(401).json({ Respuesta: "Hace falta el token" });
    } else {
      try {
        const miToken = req.headers.authorization.split(" ")[1];
        const info = jwt.verify(miToken, process.env.SUPER_KEY || "LaSuperClave");
        next();
      } catch (error) {
        res.status(401).json({ Respuesta: "El token no es valido" });
      }
    }
  }
}

const seguridad = new Seguridad();
export default seguridad;
