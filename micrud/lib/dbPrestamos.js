// lib/dbPrestamos.js

let prestamos = [

  {

    idPrestamo: 1,

    idUsuario: 1,

    idLibro: 1,

    fechaPrestamo: '2026-08-01',

    fechaDevolucion: '2026-08-15',

    estado: 'Prestado'

  },

  {

    idPrestamo: 2,

    idUsuario: 2,

    idLibro: 6,

    fechaPrestamo: '2026-08-03',

    fechaDevolucion: '2026-08-17',

    estado: 'Prestado'

  },

  {

    idPrestamo: 3,

    idUsuario: 3,

    idLibro: 24,

    fechaPrestamo: '2026-08-05',

    fechaDevolucion: '2026-08-19',

    estado: 'Prestado'

  },

  {

    idPrestamo: 4,

    idUsuario: 1,

    idLibro: 62,

    fechaPrestamo: '2026-08-07',

    fechaDevolucion: '2026-08-21',

    estado: 'Prestado'

  }

];

// Calcular el siguiente ID de forma segura

let nextIdPrestamo =

  Math.max(...prestamos.map(p => p.idPrestamo)) + 1;


// Obtener todos los préstamos

export function getPrestamos() {

  return prestamos;

}


// Obtener un préstamo por ID

export function getPrestamoById(idPrestamo) {

  return prestamos.find(

    p => p.idPrestamo === Number(idPrestamo)

  );

}


// Crear un nuevo préstamo

export function createPrestamo(data) {

  const nuevo = {

    idPrestamo: nextIdPrestamo++,

    ...data

  };

  prestamos.push(nuevo);

  return nuevo;

}


// Actualizar un préstamo

export function updatePrestamo(idPrestamo, data) {

  const index = prestamos.findIndex(

    p => p.idPrestamo === Number(idPrestamo)

  );

  if (index === -1) return null;

  prestamos[index] = {

    ...prestamos[index],

    ...data

  };

  return prestamos[index];

}


// Eliminar un préstamo

export function deletePrestamo(idPrestamo) {

  const index = prestamos.findIndex(

    p => p.idPrestamo === Number(idPrestamo)

  );

  if (index === -1) return false;

  prestamos.splice(index, 1);

  return true;

}