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
      origin: 'https://alcadia.vercel.app',
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
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
