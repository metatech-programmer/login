export const SQL_PERMISO = {
  TODOS:
    "SELECT p.id_permiso, p.id_rol, p.nombre_permiso, \
    (SELECT nombre_rol FROM roles WHERE id_rol = p.id_rol) \
    FROM permisos p",
  CREAR:
    "INSERT INTO permisos (id_rol,nombre_permiso)\
      VALUES($1,$2) RETURNING id_permiso",
  ELIMINAR:
  "DELETE FROM permisos WHERE id_permiso = $1",
  ACTUALIZAR:
  "UPDATE permisos SET nombre_permiso = $1 WHERE id_permiso = $2",
};
