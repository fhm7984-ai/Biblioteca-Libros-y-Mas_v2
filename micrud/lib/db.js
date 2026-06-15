// lib/db.js
let productos = [
  { id: 1, nombre: 'Laptop',  precio: 2500000, stock: 10 },
  { id: 2, nombre: 'Mouse',   precio: 45000,   stock: 50 },
  { id: 3, nombre: 'Teclado', precio: 85000,   stock: 30 },
];
 
let nextId = 4;
 
export function getProductos() {
  return productos;
}
 
export function getProductoById(id) {
  return productos.find(p => p.id === Number(id));
}
 
export function createProducto(data) {
  const nuevo = { id: nextId++, ...data };
  productos.push(nuevo);
  return nuevo;
}
 
export function updateProducto(id, data) {
  const index = productos.findIndex(p => p.id === Number(id));
  if (index === -1) return null;
  productos[index] = { ...productos[index], ...data };
  return productos[index];
}
 
export function deleteProducto(id) {
  const index = productos.findIndex(p => p.id === Number(id));
  if (index === -1) return false;
  productos.splice(index, 1);
  return true;
}

