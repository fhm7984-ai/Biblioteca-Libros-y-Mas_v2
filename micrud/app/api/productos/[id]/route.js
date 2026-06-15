import { NextResponse } from 'next/server'; 
import { getProductoById, updateProducto, deleteProducto } from '@/lib/db'; 
 
// GET /api/productos/1 -> Retorna un producto por ID 
export async function GET(request, { params }) { 
  const producto = getProductoById(params.id); 
  if (!producto) { 
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 }); 
  } 
  return NextResponse.json(producto); 
} 
 
// PUT /api/productos/1 -> Actualiza un producto 
export async function PUT(request, { params }) { 
  const body = await request.json(); 
  const actualizado = updateProducto(params.id, body); 
  if (!actualizado) { 
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 }); 
  } 
  return NextResponse.json(actualizado); 
} 
 
// DELETE /api/productos/1 -> Elimina un producto 
export async function DELETE(request, { params }) { 
  const eliminado = deleteProducto(params.id); 
  if (!eliminado) { 
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 }); 
  } 
  return NextResponse.json({ mensaje: 'Producto eliminado correctamente' }); 
}