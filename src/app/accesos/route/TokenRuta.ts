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
    const corsOptions = {
      origin: true,
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
