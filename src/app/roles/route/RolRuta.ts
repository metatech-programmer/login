import { Router } from "express";
import rolControlador from "../controller/RolControlador";

class RolRuta{
    public rolRutaApi:Router;

    constructor(){
        this.rolRutaApi=Router();
        this.lasRutas();
    }

    public lasRutas():void{
        this.rolRutaApi.get("/getrole",rolControlador.cargarRoles);
        this.rolRutaApi.post("/createrole",rolControlador.crearRoles);
        this.rolRutaApi.delete("/deleterole",rolControlador.eliminarRoles);
        this.rolRutaApi.put("/updaterole",rolControlador.actualizarRoles);
    }
}
const rolRuta = new RolRuta();
export default rolRuta.rolRutaApi;