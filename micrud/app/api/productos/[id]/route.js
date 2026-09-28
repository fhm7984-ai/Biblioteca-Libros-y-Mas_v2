import { NextResponse } from 'next/server';
import {
  getProductoById,
  updateProducto,
  deleteProducto
} from '@/lib/db';

// GET /api/productos/:id -> Retorna un libro por ID
export async function GET(request, { params }) {

  const { id } = await params;

  const producto = getProductoById(id);

  if (!producto) {
    return NextResponse.json(
      { error: 'Libro no encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(producto);

}

// PUT /api/productos/:id -> Actualiza un libro
export async function PUT(request, { params }) {

  const { id } = await params;

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

  const actualizado = updateProducto(id, body);

  if (!actualizado) {
    return NextResponse.json(
      { error: 'Libro no encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(actualizado);

}

// DELETE /api/productos/:id -> Elimina un libro
export async function DELETE(request, { params }) {

  const { id } = await params;

  const eliminado = deleteProducto(id);

  if (!eliminado) {
    return NextResponse.json(
      { error: 'Libro no encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    mensaje: 'Libro eliminado correctamente'
  });

}