
'use client';

export default function InicioPage() {

return (


<main
  style={{
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto'
  }}
>

  <h1
    style={{
      textAlign: 'center',
      marginBottom: '10px'
    }}
  >
    Biblioteca Libros y Más
  </h1>


  <p
    style={{
      textAlign: 'center',
      marginBottom: '40px'
    }}
  >
    Sistema de Gestión de Biblioteca
  </p>


  <div
    style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}
  >


    {/* LIBROS */}

    <a
      href="/productos"
      style={{
        textDecoration: 'none'
      }}
    >

      <div
        style={{
          border: '2px solid #ddd',
          borderRadius: '10px',
          padding: '25px',
          width: '220px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >

        <h2>📚 Libros</h2>

        <p>
          Gestionar el catálogo de libros
        </p>

      </div>

    </a>


    {/* USUARIOS */}

    <a
      href="/usuarios"
      style={{
        textDecoration: 'none'
      }}
    >

      <div
        style={{
          border: '2px solid #ddd',
          borderRadius: '10px',
          padding: '25px',
          width: '220px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >

        <h2>👥 Usuarios</h2>

        <p>
          Gestionar los usuarios de la biblioteca
        </p>

      </div>

    </a>


    {/* PRÉSTAMOS */}

    <a
      href="/prestamos"
      style={{
        textDecoration: 'none'
      }}
    >

      <div
        style={{
          border: '2px solid #ddd',
          borderRadius: '10px',
          padding: '25px',
          width: '220px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >

        <h2>🔄 Préstamos</h2>

        <p>
          Gestionar préstamos y devoluciones
        </p>

      </div>

    </a>


  </div>


  <div
    style={{
      marginTop: '50px',
      textAlign: 'center'
    }}
  >

    <p>
      Selecciona una opción para comenzar.
    </p>

  </div>


</main>


);

}
