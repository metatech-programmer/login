import { Router } from "express";
import rolControlador from "../controller/RolControlador";
import cors from 'cors';

class RolRuta {
  public rolRutaApi: Router;

  constructor() {
    this.rolRutaApi = Router();
    this.lasRutas();
  }

  public lasRutas(): void {
    // Configurar CORS para todas las rutas
    const corsOptions = {
      origin: 'https://alcadia.vercel.app',
      optionsSuccessStatus: 200,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true
    };

    this.rolRutaApi.get("/getrole", cors(corsOptions), rolControlador.cargarRoles);
    this.rolRutaApi.post("/createrole", cors(corsOptions), rolControlador.crearRoles);
    this.rolRutaApi.delete("/deleterole", cors(corsOptions), rolControlador.eliminarRoles);
    this.rolRutaApi.put("/updaterole", cors(corsOptions), rolControlador.actualizarRoles);
  }
}

const rolRuta = new RolRuta();
export default rolRuta.rolRutaApi;