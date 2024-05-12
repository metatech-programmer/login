export const SQL_ACCESOS = {
  TODOS:
    "SELECT a.id_usuario, a.correo_acceso, a.clave_acceso, a.estado_acceso,\
    (SELECT nombre_usuario FROM USUARIOS where id_usuario = a.id_usuario)\
    from accesos a ;",  

  TOKEN:
    "SELECT u.nombre_usuario, u.apellido_usuario, u.tipo_identificacion_usuario, u.numero_identificacion_usuario,\
  r.nombre_rol, a.correo_acceso, a.estado_acceso, a.clave_acceso\
  FROM usuarios u\
  INNER JOIN accesos a\
  ON a.id_usuario = u.id_usuario\
  INNER JOIN roles r\
  ON r.id_rol = u.id_rol\
  where u.numero_identificacion_usuario = $1",

  CREAR:
    "INSERT INTO accesos (id_usuario, correo_acceso, clave_acceso, estado_acceso)\
     values ($1,$2,$3,$4) returning id_usuario",

  ELIMINAR: 
  "delete from accesos where id_usuario = $1;",

  ACTUALIZAR:
  "update accesos set correo_acceso = $1, clave_acceso = $2, estado_acceso = $3 where id_usuario = $4;",
};
