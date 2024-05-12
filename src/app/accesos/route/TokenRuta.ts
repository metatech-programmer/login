import { Router } from "express";
import tokenControlador from "../controller/TokenControlador";

class TokenRuta {
  public tokenRutaApi: Router;

  constructor() {
    this.tokenRutaApi = Router();
    this.lasRutas();
  }

  public lasRutas(): void {
    this.tokenRutaApi.post("/gettoken", tokenControlador.crearToken);
  }
}
const tokenRuta = new TokenRuta();
export default tokenRuta.tokenRutaApi;
