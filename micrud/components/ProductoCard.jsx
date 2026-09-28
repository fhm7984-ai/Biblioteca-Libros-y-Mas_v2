export default function ProductoCard({ producto, onEditar, onEliminar }) {

  console.log(producto);
  
  return (

    <div
      style={{
        border: '2px solid #ddd',
        padding: '1rem',
        marginBottom: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >

      <div>

        <strong
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
          }}
        >
          {producto.titulo}
        </strong>

        <br />

        <span
          style={{
            fontFamily: 'verdana',
            fontWeight: 'bold'
          }}
        >
          Autor: {producto.autor}
        </span>

        <br />

        <span
          style={{
            fontFamily: 'montserrat',
            fontWeight: 'bold'
          }}
        >
          Editorial: {producto.editorial}
        </span>

        <br />

        <span
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold'
          }}
        >
          Categoría: {producto.categoria}
        </span>

      </div>

      <div>

        <button
          onClick={onEditar}
          style={{
            backgroundColor: '#776a22',
            fontFamily: 'sans-serif',
            color: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '10px',
            cursor: 'pointer',
            marginRight: '20px'
          }}
        >
          Editar
        </button>

        <button
          onClick={onEliminar}
          style={{
            backgroundColor: '#355f0e',
            fontFamily: 'sans-serif',
            color: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          Eliminar
        </button>

      </div>

    </div>

  );

}