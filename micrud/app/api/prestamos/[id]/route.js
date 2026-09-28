import { NextResponse } from 'next/server';

import {
  getPrestamoById,
  updatePrestamo,
  deletePrestamo
} from '@/lib/dbPrestamos';


// GET
export async function GET(request, { params }) {

  const { id } = await params;

  const prestamo = getPrestamoById(id);

  if (!prestamo) {

    return NextResponse.json(
      {
        error: 'Préstamo no encontrado'
      },
      {
        status: 404
      }
    );

  }

  return NextResponse.json(prestamo);

}


// PUT
export async function PUT(request, { params }) {

  const { id } = await params;

  const body = await request.json();

  const actualizado = updatePrestamo(id, body);

  if (!actualizado) {

    return NextResponse.json(
      {
        error: 'Préstamo no encontrado'
      },
      {
        status: 404
      }
    );

  }

  return NextResponse.json(actualizado);

}


// DELETE
export async function DELETE(request, { params }) {

  const { id } = await params;

  const eliminado = deletePrestamo(id);

  if (!eliminado) {

    return NextResponse.json(
      {
        error: 'Préstamo no encontrado'
      },
      {
        status: 404
      }
    );

  }

  return NextResponse.json({
    mensaje: 'Préstamo eliminado'
  });

}