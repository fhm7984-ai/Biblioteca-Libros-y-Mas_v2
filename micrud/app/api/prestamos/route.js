import { NextResponse } from 'next/server';

import {
  getPrestamos,
  createPrestamo
} from '@/lib/dbPrestamos';


// GET /api/prestamos
// Retorna todos los préstamos
export async function GET() {

  const prestamos = getPrestamos();

  return NextResponse.json(prestamos);

}


// POST /api/prestamos
// Crea un nuevo préstamo
export async function POST(request) {

  const body = await request.json();

  // Validación básica
  if (
    !body.idUsuario ||
    !body.idLibro ||
    !body.fechaPrestamo ||
    !body.fechaDevolucion ||
    !body.estado
  ) {

    return NextResponse.json(
      {
        error:
          'Usuario, libro, fecha de préstamo, fecha de devolución y estado son obligatorios'
      },
      {
        status: 400
      }
    );

  }

  const nuevo = createPrestamo(body);

  return NextResponse.json(
    nuevo,
    {
      status: 201
    }
  );

}