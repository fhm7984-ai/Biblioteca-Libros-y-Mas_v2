import { NextResponse } from 'next/server';

import {
  getUsuarioById,
  updateUsuario,
  deleteUsuario
} from '@/lib/dbUsuarios';


// GET /api/usuarios/:id
// Retorna un usuario por su ID

export async function GET(request, { params }) {

  const { id } = await params;

  const usuario = getUsuarioById(id);

  if (!usuario) {

    return NextResponse.json(

      {
        error: 'Usuario no encontrado'
      },

      {
        status: 404
      }

    );

  }

  return NextResponse.json(usuario);

}


// PUT /api/usuarios/:id
// Actualiza un usuario

export async function PUT(request, { params }) {

  const { id } = await params;

  const body = await request.json();

  const actualizado = updateUsuario(id, body);

  if (!actualizado) {

    return NextResponse.json(

      {
        error: 'Usuario no encontrado'
      },

      {
        status: 404
      }

    );

  }

  return NextResponse.json(actualizado);

}


// DELETE /api/usuarios/:id
// Elimina un usuario

export async function DELETE(request, { params }) {

  const { id } = await params;

  const eliminado = deleteUsuario(id);

  if (!eliminado) {

    return NextResponse.json(

      {
        error: 'Usuario no encontrado'
      },

      {
        status: 404
      }

    );

  }

  return NextResponse.json({

    mensaje: 'Usuario eliminado correctamente'

  });

}