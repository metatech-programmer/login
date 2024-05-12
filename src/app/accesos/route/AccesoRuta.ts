import { Router } from "express";
import AccesoControlador from "../controller/AccesoControlador";
import cors from "cors";

class AccesoRuta {
  public accesoRutaApi: Router;

  constructor() {
    this.accesoRutaApi = Router();
    this.lasRutas();
  }

  public lasRutas(): void {
    // Configurar CORS para todas las rutas
    const corsOptions = {
      origin: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    };

    this.accesoRutaApi.get(
      "/getaccess",
      cors(corsOptions),
      AccesoControlador.cargarAcceso
    );
    this.accesoRutaApi.post(
      "/createaccess",
      cors(corsOptions),
      AccesoControlador.crearAcceso
    );
    this.accesoRutaApi.delete(
      "/deleteaccess",
      cors(corsOptions),
      AccesoControlador.eliminarAcceso
    );
    this.accesoRutaApi.put(
      "/updateaccess",
      cors(corsOptions),
      AccesoControlador.actualizarAcceso
    );
  }
}

const accesoRuta = new AccesoRuta();
export default accesoRuta.accesoRutaApi;
