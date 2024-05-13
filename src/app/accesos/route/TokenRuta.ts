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
    
    this.tokenRutaApi.post(
      "/gettoken",
      tokenControlador.crearToken
    );
  }
}

const tokenRuta = new TokenRuta();
export default tokenRuta.tokenRutaApi;
