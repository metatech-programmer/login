import Servidor from "../src/config/api/Servidor";

const servidor = new Servidor();
console.clear();
servidor.cargarServidor();
export default servidor.app;
