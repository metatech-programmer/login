export const SQL_USUARIO = {
  TODOS:
    "SELECT u.id_usuario ,u.id_rol,\
      u.nombre_usuario,u.apellido_usuario,\
      u.tipo_identificacion_usuario,u.numero_identificacion_usuario,\
      u.direccion_usuario,u.telefono_usuario,\
      (SELECT nombre_rol FROM roles WHERE id_rol = u.id_rol)\
      FROM usuarios u ;",
  CREAR:
    "INSERT INTO usuarios(id_rol,nombre_usuario,apellido_usuario,\
      tipo_identificacion_usuario,numero_identificacion_usuario,\
      direccion_usuario,telefono_usuario)\
      VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id_usuario",
  ELIMINAR:
  "DELETE FROM usuarios WHERE id_usuario = $1",
  
  ACTUALIZAR: 
  "UPDATE usuarios SET id_rol = $1,nombre_usuario = $2,apellido_usuario = $3,\
    tipo_identificacion_usuario = $4,numero_identificacion_usuario = $5,\
    direccion_usuario = $6,telefono_usuario = $7 WHERE id_usuario = $8",

    CREARACCESO:
    "INSERT INTO accesos (id_usuario, correo_acceso, clave_acceso, estado_acceso)\
     values ($1,$2,$3,$4) ;",
};
