// app/prestamos/page.jsx

'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioPrestamo from '@/components/FormularioPrestamo';
import PrestamoCard from '@/components/PrestamoCard';

export default function PrestamosPage() {

  const [prestamos, setPrestamos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [libros, setLibros] = useState([]);

  const [editando, setEditando] = useState(null);
  const [cargando, setCargando] = useState(true);


  useEffect(() => {

    cargarPrestamos();
    cargarUsuarios();
    cargarLibros();

  }, []);


  async function cargarPrestamos() {

    const res = await axios.get('/api/prestamos');

    setPrestamos(res.data);

    setCargando(false);
  }


  async function cargarUsuarios() {

    const res = await axios.get('/api/usuarios');

    setUsuarios(res.data);
  }


  async function cargarLibros() {

    const res = await axios.get('/api/productos');

    setLibros(res.data);
  }


  async function eliminarPrestamo(idPrestamo) {

    if (!confirm('¿Seguro que deseas eliminar este préstamo?')) return;

    await axios.delete('/api/prestamos/' + idPrestamo);

    cargarPrestamos();
  }


  return (

    <main
      style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}
    >

      <h1>Gestión de Préstamos</h1>


      <FormularioPrestamo
        prestamoEditar={editando}
        onGuardar={() => {
          setEditando(null);
          cargarPrestamos();
        }}
        onCancelar={() => setEditando(null)}
      />


      <h2>Listado de Préstamos</h2>


      {cargando && <p>Cargando...</p>}


      {prestamos.map((p) => (

        <PrestamoCard
          key={p.idPrestamo}
          prestamo={p}
          usuarios={usuarios}
          libros={libros}
          onEditar={() => setEditando(p)}
          onEliminar={() => eliminarPrestamo(p.idPrestamo)}
        />

      ))}


    </main>

  );

}