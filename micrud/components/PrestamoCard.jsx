export default function PrestamoCard({
  prestamo,
  usuarios,
  libros,
  onEditar,
  onEliminar
}) {

  // Buscar el usuario correspondiente al préstamo

  const usuario = usuarios.find(
    (u) => u.idUsuario === prestamo.idUsuario
  );


  // Buscar el libro correspondiente al préstamo

  const libro = libros.find(
    (l) => l.idLibro === prestamo.idLibro
  );


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
          Préstamo #{prestamo.idPrestamo}
        </strong>

        <br />

        <span
          style={{
            fontFamily: 'verdana',
            fontWeight: 'bold'
          }}
        >
          Usuario: {
            usuario
              ? usuario.nombre + ' ' + usuario.apellido
              : prestamo.idUsuario
          }
        </span>

        <br />

        <span
          style={{
            fontFamily: 'montserrat',
            fontWeight: 'bold'
          }}
        >
          Libro: {
            libro
              ? libro.titulo
              : prestamo.idLibro
          }
        </span>

        <br />

        <span
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold'
          }}
        >
          Fecha de préstamo: {prestamo.fechaPrestamo}
        </span>

        <br />

        <span
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold'
          }}
        >
          Fecha de devolución: {prestamo.fechaDevolucion}
        </span>

        <br />

        <span
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold'
          }}
        >
          Estado: {prestamo.estado}
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