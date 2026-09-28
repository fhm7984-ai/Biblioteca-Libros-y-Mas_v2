import { NextResponse } from 'next/server';
import { getProductos, createProducto } from '@/lib/db';

// GET /api/productos -> Retorna todos los libros
export async function GET() {

  const productos = getProductos();

  return NextResponse.json(productos);

}

// POST /api/productos -> Crea un nuevo libro
export async function POST(request) {

  const body = await request.json();

  // Validación básica
  if (
    !body.titulo ||
    !body.autor ||
    !body.editorial ||
    !body.categoria
  ) {

    return NextResponse.json(
      {
        error: 'Título, autor, editorial y categoría son obligatorios'
      },
      {
        status: 400
      }
    );

  }

  const nuevo = createProducto(body);

  return NextResponse.json(nuevo, { status: 201 });

}