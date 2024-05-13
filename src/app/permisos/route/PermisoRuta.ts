import { Router } from "express";
import permisoControlador from "../controller/PermisoControlador";
import cors from "cors";

class PermisoRuta {
  public permisoRutaApi: Router;

  constructor() {
    this.permisoRutaApi = Router();
    this.lasRutas();
  }

  public lasRutas(): void {
    const corsOptions = {
      origin: 'https://alcadia.vercel.app',
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
    };

    this.permisoRutaApi.get(
      "/getpermission",
      cors(corsOptions),
      permisoControlador.cargarPermiso
    );
    this.permisoRutaApi.post(
      "/createpermission",
      cors(corsOptions),
      permisoControlador.crearPermiso
    );
    this.permisoRutaApi.delete(
      "/deletepermission",
      cors(corsOptions),
      permisoControlador.eliminarPermiso
    );
    this.permisoRutaApi.put(
      "/updatepermission",
      cors(corsOptions),
      permisoControlador.actualizarPermiso
    );
  }
}

const permisoRuta = new PermisoRuta();
export default permisoRuta.permisoRutaApi;
