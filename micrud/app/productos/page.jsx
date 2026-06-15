// app/productos/page.jsx
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioProducto from '@/components/FormularioProducto';
import ProductoCard from '@/components/ProductoCard';
 
export default function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [editando,  setEditando]  = useState(null);
  const [cargando,  setCargando]  = useState(true);
 
  useEffect(() => {
    cargarProductos();
  }, []);
 
  async function cargarProductos() {
    const res = await axios.get('/api/productos');
    setProductos(res.data);
    setCargando(false);
  }
 
  async function eliminarProducto(id) {
    if (!confirm('¿Seguro que deseas eliminar este producto?')) return;
    await axios.delete('/api/productos/' + id);
    cargarProductos();
  }
 
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Gestión de Productos</h1>
      <FormularioProducto
        productoEditar={editando}
        onGuardar={() => { setEditando(null); cargarProductos(); }}
        onCancelar={() => setEditando(null)}
      />
      <h2>Lista de Productos</h2>
      {cargando && <p>Cargando...</p>}
      {productos.map(p => (
        <ProductoCard
          key={p.id}
          producto={p}
          onEditar={() => setEditando(p)}
          onEliminar={() => eliminarProducto(p.id)}
        />
      ))}
    </main>
  );
}
 
