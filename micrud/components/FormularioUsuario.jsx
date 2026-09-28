'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FormularioUsuario({
  usuarioEditar,
  onGuardar,
  onCancelar
}) {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  // Si viene un usuario para editar
  useEffect(() => {

    if (usuarioEditar) {

      setNombre(usuarioEditar.nombre);
      setApellido(usuarioEditar.apellido);
      setCorreo(usuarioEditar.correo);
      setTelefono(usuarioEditar.telefono);

    } else {

      setNombre('');
      setApellido('');
      setCorreo('');
      setTelefono('');

    }

  }, [usuarioEditar]);

  async function manejarEnvio(e) {

    e.preventDefault();

    const datos = {
      nombre,
      apellido,
      correo,
      telefono
    };

    if (usuarioEditar) {

      await axios.put(
        '/api/usuarios/' + usuarioEditar.idUsuario,
        datos
      );

    } else {

      await axios.post(
        '/api/usuarios',
        datos
      );

    }

    onGuardar();

  }

  return (

    <form
      onSubmit={manejarEnvio}
      style={{
        border: '5px solid #d1d5db',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '3rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '1000px'
      }}
    >

      <h2
        style={{
          marginBottom: '20px',
          color: '#2563eb',
          textAlign: 'center'
        }}
      >
        {usuarioEditar ? 'Editar Usuario' : 'Agregar Usuario'}
      </h2>

      <div style={{ marginBottom: '15px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >
          NOMBRE:

          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px'
            }}
          />

        </label>

      </div>

      <div style={{ marginBottom: '15px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >
          APELLIDO:

          <input
            value={apellido}
            onChange={e => setApellido(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px'
            }}
          />

        </label>

      </div>

      <div style={{ marginBottom: '15px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >
          CORREO ELECTRÓNICO:

          <input
            type="email"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px'
            }}
          />

        </label>

      </div>

      <div style={{ marginBottom: '20px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >
          TELÉFONO:

          <input
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px'
            }}
          />

        </label>

      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#2563eb',
          fontFamily: 'sans-serif',
          color: 'white',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginRight: '15px'
        }}
      >
        {usuarioEditar ? 'Actualizar Usuario' : 'Agregar Usuario'}
      </button>

      {usuarioEditar && (

        <button
          type="button"
          onClick={onCancelar}
          style={{
            backgroundColor: '#2563eb',
            fontFamily: 'sans-serif',
            color: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          Cancelar
        </button>

      )}

    </form>

  );

}