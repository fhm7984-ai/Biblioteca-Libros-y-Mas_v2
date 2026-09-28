// app/usuarios/page.jsx
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioUsuario from '@/components/FormularioUsuario';
import UsuarioCard from '@/components/UsuarioCard';

export default function UsuariosPage() {

  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  async function cargarUsuarios() {

    const res = await axios.get('/api/usuarios');

    setUsuarios(res.data);

    setCargando(false);

  }

  async function eliminarUsuario(idUsuario) {

    if (!confirm('¿Seguro que deseas eliminar este usuario?')) return;

    await axios.delete('/api/usuarios/' + idUsuario);

    cargarUsuarios();

  }

  return (

    <main
      style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}
    >

      <h1>Gestión de Usuarios</h1>

      <FormularioUsuario
        usuarioEditar={editando}
        onGuardar={() => {
          setEditando(null);
          cargarUsuarios();
        }}
        onCancelar={() => setEditando(null)}
      />

      <h2>Listado de Usuarios</h2>

      {cargando && <p>Cargando...</p>}

      {usuarios.map((u) => (

        <UsuarioCard
          key={u.idUsuario}
          usuario={u}
          onEditar={() => setEditando(u)}
          onEliminar={() => eliminarUsuario(u.idUsuario)}
        />

      ))}

    </main>

  );

}