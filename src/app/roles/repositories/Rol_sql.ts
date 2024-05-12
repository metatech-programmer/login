export const SQL_ROL = {
  TODOS:
    "SELECT r.id_rol,r.nombre_rol \
     FROM roles r",
  CREAR:
    "INSERT INTO roles(nombre_rol)\
   VALUES($1) RETURNING id_rol",
   ELIMINAR:
   "DELETE FROM roles WHERE id_rol = $1",
   ACTUALIZAR:
   "UPDATE roles SET nombre_rol = $1 WHERE id_rol = $2"
};
