'use client'; 
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
 
export default function FormularioProducto({ productoEditar, onGuardar, 
onCancelar }) { 
  const [nombre, setNombre] = useState(''); 
  const [precio, setPrecio] = useState(''); 
  const [stock,  setStock]  = useState(''); 
 
  // Si viene un producto a editar, llenar el formulario 
  useEffect(() => { 
    if (productoEditar) { 
      setNombre(productoEditar.nombre); 
      setPrecio(productoEditar.precio); 
      setStock(productoEditar.stock); 
    } else { 
      setNombre(''); setPrecio(''); setStock(''); 
    } 
  }, [productoEditar]);
  async function manejarEnvio(e) { 
    e.preventDefault(); 
    const datos = { nombre, precio: Number(precio), stock: Number(stock) }; 
 
    if (productoEditar) { 
      // Actualizar producto existente 
      await axios.put('/api/productos/' + productoEditar.id, datos); 
    } else { 
      // Crear producto nuevo 
      await axios.post('/api/productos', datos); 
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
      {productoEditar ? 'Editar Producto' : 'Agregar Producto'}
    </h2>

    <div style={{ marginBottom: '15px' }}>
      <label style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'blue' }}>
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
      <label style={{ fontFamily: 'sans-serif',  fontWeight: 'bold', color: 'blue'}}>
        PRECIO:
        <input
          type="number"
          value={precio}
          onChange={e => setPrecio(e.target.value)}
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
      <label style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'blue' }}>
        STOCK:
        <input
          type="number"
          value={stock}
          onChange={e => setStock(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            border: '2px solid #000000',
            borderRadius: '6px',
            fontFamily: "sans-serif"
          }}
        />
      </label>
    </div>

    <button
      type="submit"
      style={{
        backgroundColor: '#2563eb',
        fontFamily: "sans-serif",
        color: 'white',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
        marginRight: '15px'
      }}
    >
      {productoEditar ? 'Guardar cambios' : 'Agregar'}
    </button>

    {productoEditar && (
      <button
        type="button"
        onClick={onCancelar}
        style={{
          backgroundColor: '#2563eb',
          fontFamily: "sans-serif",
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