'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FormularioPrestamo({
  prestamoEditar,
  onGuardar,
  onCancelar
}) {

  const [idUsuario, setIdUsuario] = useState('');
  const [idLibro, setIdLibro] = useState('');
  const [fechaPrestamo, setFechaPrestamo] = useState('');
  const [fechaDevolucion, setFechaDevolucion] = useState('');
  const [estado, setEstado] = useState('Prestado');

  // Listas de usuarios y libros
  const [usuarios, setUsuarios] = useState([]);
  const [libros, setLibros] = useState([]);

  // Cargar usuarios y libros
  useEffect(() => {

    async function cargarDatos() {

      try {

        const resUsuarios = await axios.get('/api/usuarios');
        const resLibros = await axios.get('/api/productos');

        setUsuarios(resUsuarios.data);
        setLibros(resLibros.data);

      } catch (error) {

        console.error('Error al cargar usuarios y libros:', error);

      }

    }

    cargarDatos();

  }, []);

  // Si viene un préstamo a editar,
  // llenar el formulario

  useEffect(() => {

    if (prestamoEditar) {

      setIdUsuario(prestamoEditar.idUsuario);
      setIdLibro(prestamoEditar.idLibro);
      setFechaPrestamo(prestamoEditar.fechaPrestamo);
      setFechaDevolucion(prestamoEditar.fechaDevolucion);
      setEstado(prestamoEditar.estado);

    } else {

      setIdUsuario('');
      setIdLibro('');
      setFechaPrestamo('');
      setFechaDevolucion('');
      setEstado('Prestado');

    }

  }, [prestamoEditar]);


  async function manejarEnvio(e) {

    e.preventDefault();

    const datos = {

      idUsuario: Number(idUsuario),
      idLibro: Number(idLibro),
      fechaPrestamo,
      fechaDevolucion,
      estado

    };

    try {

      if (prestamoEditar) {

        // Actualizar préstamo existente

        await axios.put(
          '/api/prestamos/' + prestamoEditar.idPrestamo,
          datos
        );

      } else {

        // Crear préstamo nuevo

        await axios.post(
          '/api/prestamos',
          datos
        );

      }

      onGuardar();

    } catch (error) {

      console.error('Error al guardar el préstamo:', error);

      alert('No fue posible guardar el préstamo.');

    }

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
        {prestamoEditar
          ? 'Editar Préstamo'
          : 'Agregar Préstamo'}
      </h2>


      {/* USUARIO */}

      <div style={{ marginBottom: '15px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >

          USUARIO:

          <select
            value={idUsuario}
            onChange={e => setIdUsuario(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px',
              fontFamily: 'sans-serif'
            }}
          >

            <option value="">
              Seleccione un usuario
            </option>

            {usuarios.map(usuario => (

              <option
                key={usuario.idUsuario}
                value={usuario.idUsuario}
              >

                {usuario.nombre} - {usuario.documento}

              </option>

            ))}

          </select>

        </label>

      </div>


      {/* LIBRO */}

      <div style={{ marginBottom: '15px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >

          LIBRO:

          <select
            value={idLibro}
            onChange={e => setIdLibro(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px',
              fontFamily: 'sans-serif'
            }}
          >

            <option value="">
              Seleccione un libro
            </option>

            {libros.map(libro => (

              <option
                key={libro.idLibro}
                value={libro.idLibro}
              >

                {libro.titulo} - {libro.autor}

              </option>

            ))}

          </select>

        </label>

      </div>


      {/* FECHA DE PRÉSTAMO */}

      <div style={{ marginBottom: '15px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >

          FECHA DE PRÉSTAMO:

          <input
            type="date"
            value={fechaPrestamo}
            onChange={e => setFechaPrestamo(e.target.value)}
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


      {/* FECHA DE DEVOLUCIÓN */}

      <div style={{ marginBottom: '20px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >

          FECHA DE DEVOLUCIÓN:

          <input
            type="date"
            value={fechaDevolucion}
            onChange={e => setFechaDevolucion(e.target.value)}
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


      {/* ESTADO */}

      <div style={{ marginBottom: '20px' }}>

        <label
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'blue'
          }}
        >

          ESTADO:

          <select
            value={estado}
            onChange={e => setEstado(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #000000',
              borderRadius: '6px',
              fontFamily: 'sans-serif'
            }}
          >

            <option value="Prestado">
              Prestado
            </option>

            <option value="Devuelto">
              Devuelto
            </option>

            <option value="Atrasado">
              Atrasado
            </option>

          </select>

        </label>

      </div>


      {/* BOTÓN GUARDAR */}

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

        {prestamoEditar
          ? 'Actualizar Préstamo'
          : 'Agregar Préstamo'}

      </button>


      {/* BOTÓN CANCELAR */}

      {prestamoEditar && (

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