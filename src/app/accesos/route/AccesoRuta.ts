import { Router } from "express";
import AccesoControlador from "../controller/AccesoControlador";


class AccesoRuta{
    public accesoRutaApi:Router;

    constructor(){
        this.accesoRutaApi=Router();
        this.lasRutas();
    }

    public lasRutas():void{
        this.accesoRutaApi.get("/getaccess",AccesoControlador.cargarAcceso);
        this.accesoRutaApi.post("/createaccess",AccesoControlador.crearAcceso);
        this.accesoRutaApi.delete("/deleteaccess",AccesoControlador.eliminarAcceso);
        this.accesoRutaApi.put("/updateaccess",AccesoControlador.actualizarAcceso);
    }
}
const accesoRuta = new AccesoRuta();
export default accesoRuta.accesoRutaApi;