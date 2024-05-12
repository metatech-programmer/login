import express from "express";
import morgan from "morgan";
import rolRutaApi from "../../app/roles/route/RolRuta";
import permisoRutaApi from "../../app/permisos/route/PermisoRuta";
import usuarioRutaApi from "../../app/usuarios/route/UsuarioRuta";
import accesoRutaApi from "../../app/accesos/route/AccesoRuta";
import tokenRutaApi from "../../app/accesos/route/TokenRuta";
import seguridad from "../../middleware/Seguridad";
import bodyParser = require("body-parser");
const cors = require("cors");
process.loadEnvFile();

class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.cargarConfiguracion();
    this.cargarRutas();
  }

  public cargarConfiguracion(): void {
    const corsOptions = {
      origin: true,
      optionsSuccessStatus: 200,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    };
    this.app.use(cors(corsOptions));
    this.app.set("PORT", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json({ limit: "5mb" }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  public cargarRutas(): void {
    this.app.use("/api/access", seguridad.revisar, accesoRutaApi);
    this.app.use("/api/permission", seguridad.revisar, permisoRutaApi);
    this.app.use("/api/role", seguridad.revisar, rolRutaApi);
    this.app.use("/api/user", seguridad.revisar, usuarioRutaApi);
    this.app.use("/api/token", tokenRutaApi);
  }

  public cargarServidor(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Backend funcionando");
    });
  }
}
export default Servidor;
