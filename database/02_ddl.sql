/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     21/04/2024 9:52:58 a. m.                     */
/*==============================================================*/


/*==============================================================*/
/* Table: accesos                                               */
/*==============================================================*/
create table accesos (
   id_usuario           int4                 not null,
   correo_acceso        varchar(100)         not null,
   clave_acceso         varchar(300)         not null,
   estado_acceso        int2                 not null default 1
      constraint ckc_estado_acceso_accesos check (estado_acceso in (1,2)),
   constraint pk_accesos primary key (id_usuario)
);

comment on column accesos.estado_acceso is
'1 activo
2 inactivo';


/*==============================================================*/
/* Table: permisos                                              */
/*==============================================================*/
create table permisos (
   id_permiso           serial               not null,
   id_rol               int4                 not null,
   nombre_permiso       varchar(150)         not null,
   constraint pk_permisos primary key (id_permiso)
);

/*==============================================================*/
/* Table: permisos_usuarios                                     */
/*==============================================================*/
create table permisos_usuarios (
   id_usuario           int4                 not null,
   id_permiso           int4                 not null,
   constraint pk_permisos_usuarios primary key (id_usuario, id_permiso)
);


/*==============================================================*/
/* Table: roles                                                 */
/*==============================================================*/
create table roles (
   id_rol               serial               not null,
   nombre_rol           varchar(100)         not null,
   constraint pk_roles primary key (id_rol)
);

/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios (
   id_usuario           serial               not null,
   id_rol               int4                 not null,
   nombre_usuario       varchar(100)         not null,
   apellido_usuario     varchar(100)         not null,
   tipo_identificacion_usuario varchar(3)           not null default 'CC'
      constraint ckc_tipo_identificaci_usuarios check (tipo_identificacion_usuario in ('CC','PA','TI')),
   numero_identificacion_usuario varchar(20)          not null,
   direccion_usuario    varchar(100)         not null,
   telefono_usuario     varchar(30)          not null,
   constraint pk_usuarios primary key (id_usuario)
);

comment on column usuarios.tipo_identificacion_usuario is
'CC Cedula de Ciudadania
PA Pasaporte
TI Tarjeta de Identidad';

alter table accesos
   add constraint fk_accesos_reference_usuarios foreign key (id_usuario)
      references usuarios (id_usuario)
      on delete restrict on update cascade;

alter table permisos
   add constraint fk_permisos_reference_roles foreign key (id_rol)
      references roles (id_rol)
      on delete restrict on update cascade;

alter table permisos_usuarios
   add constraint fk_permisos_reference_usuarios foreign key (id_usuario)
      references usuarios (id_usuario)
      on delete restrict on update cascade;

alter table permisos_usuarios
   add constraint fk_permisos_reference_permisos foreign key (id_permiso)
      references permisos (id_permiso)
      on delete restrict on update cascade;

alter table usuarios
   add constraint fk_usuarios_reference_roles foreign key (id_rol)
      references roles (id_rol)
      on delete restrict on update cascade;

