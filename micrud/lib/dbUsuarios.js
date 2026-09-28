// lib/dbUsuarios.js

let usuarios = [

  {
    idUsuario: 1,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@correo.com",
    telefono: "3001234567"
  },

  {
    idUsuario: 2,
    nombre: "María",
    apellido: "Gómez",
    correo: "maria.gomez@correo.com",
    telefono: "3019876543"
  },

  {
    idUsuario: 3,
    nombre: "Carlos",
    apellido: "Rodríguez",
    correo: "carlos.rodriguez@correo.com",
    telefono: "3204567890"
  },

  {
    idUsuario: 4,
    nombre: "Laura",
    apellido: "Martínez",
    correo: "laura.martinez@correo.com",
    telefono: "3159871234"
  },

  {
    idUsuario: 5,
    nombre: "Andrés",
    apellido: "López",
    correo: "andres.lopez@correo.com",
    telefono: "3116549870"
  }

];

// Calcular automáticamente el siguiente ID

let nextIdUsuario =
  Math.max(...usuarios.map(u => u.idUsuario)) + 1;


// Obtener todos los usuarios

export function getUsuarios() {

  return usuarios;

}


// Obtener un usuario por ID

export function getUsuarioById(idUsuario) {

  return usuarios.find(
    u => u.idUsuario === Number(idUsuario)
  );

}


// Crear un usuario

export function createUsuario(data) {

  const nuevo = {

    idUsuario: nextIdUsuario++,

    ...data

  };

  usuarios.push(nuevo);

  return nuevo;

}


// Actualizar un usuario

export function updateUsuario(idUsuario, data) {

  const index = usuarios.findIndex(
    u => u.idUsuario === Number(idUsuario)
  );

  if (index === -1) return null;

  usuarios[index] = {

    ...usuarios[index],

    ...data

  };

  return usuarios[index];

}


// Eliminar un usuario

export function deleteUsuario(idUsuario) {

  const index = usuarios.findIndex(
    u => u.idUsuario === Number(idUsuario)
  );

  if (index === -1) return false;

  usuarios.splice(index, 1);

  return true;

}




