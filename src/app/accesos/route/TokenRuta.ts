import { Router } from "express";
import tokenControlador from "../controller/TokenControlador";
import cors from "cors";

class TokenRuta {
  public tokenRutaApi: Router;
  constructor() {
    this.tokenRutaApi = Router();
    this.lasRutas();
  }

  public lasRutas(): void {
    // Configurar CORS para la ruta "/gettoken"
    const corsOptions = {
      origin: true,
      optionsSuccessStatus: 200,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    };

    this.tokenRutaApi.post(
      "/gettoken",
      cors(corsOptions),
      tokenControlador.crearToken
    );
  }
}

const tokenRuta = new TokenRuta();
export default tokenRuta.tokenRutaApi;
