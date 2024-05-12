import pgPromise from "pg-promise";
import {camelizeColumns,IClient} from "./FuncionesConexion";

export const opcionesPG:pgPromise.IInitOptions<IClient>={
    receive({data, result, ctx}){
        camelizeColumns(data);
    }
}