import { Router } from "express";
import permisoControlador from "../controller/PermisoControlador";

class PermisoRuta{
    public permisoRutaApi:Router;

    constructor(){
        this.permisoRutaApi=Router();
        this.lasRutas();
    }

    public lasRutas():void{
        this.permisoRutaApi.get("/getpermission",permisoControlador.cargarPermiso);
        this.permisoRutaApi.post("/createpermission",permisoControlador.crearPermiso);
        this.permisoRutaApi.delete("/deletepermission",permisoControlador.eliminarPermiso);
        this.permisoRutaApi.put("/updatepermission",permisoControlador.actualizarPermiso);
    }
}
const permisoRuta = new PermisoRuta();
export default permisoRuta.permisoRutaApi;