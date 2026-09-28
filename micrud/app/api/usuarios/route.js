import { NextResponse } from 'next/server';

import {
  getUsuarios,
  createUsuario
} from '@/lib/dbUsuarios';


// GET /api/usuarios
// Retorna todos los usuarios

export async function GET() {

  const usuarios = getUsuarios();

  return NextResponse.json(usuarios);

}


// POST /api/usuarios
// Crea un nuevo usuario

export async function POST(request) {

  const body = await request.json();

  // Validación básica

  if (

    !body.nombre ||
    !body.apellido ||
    !body.correo ||
    !body.telefono

  ) {

    return NextResponse.json(

      {
        error: 'Nombre, apellido, correo y teléfono son obligatorios'
      },

      {
        status: 400
      }

    );

  }

  const nuevo = createUsuario(body);

  return NextResponse.json(

    nuevo,

    {
      status: 201
    }

  );

}