import { opcionesPG } from "./OpcionesConexion";
import pgPromise from "pg-promise";
import VariablesCon from "./VariablesConexion";

const pgp = pgPromise(opcionesPG);
const pool = pgp(VariablesCon) ; //asi se llama la conexion

pool
  .connect()
  .then((miConexion) => {
    console.log("Conectados a la base :)", VariablesCon.database);
    miConexion.done();
  })
  .catch((miError) => {
    console.log(miError);
  });

export default pool; //exportacion general
