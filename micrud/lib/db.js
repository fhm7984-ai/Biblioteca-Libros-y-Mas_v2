// lib/db.js
let productos = [
  { idLibro: 1, titulo: "Topografía con AutoCAD CIVIL 3D 2009", autor: "Hugo León Arenas Lozano", editorial: "Grupo Macro", categoria: "Topografía" },
  { idLibro: 2, titulo: "Diseño Geométrico de Carreteras", autor: "James Cárdenas Grisales", editorial: "Ecoe Ediciones", categoria: "Vías y Pavimentos" },
  { idLibro: 3, titulo: "Ingeniería de Pavimentos: Fundamentos, estudios básicos y diseño", autor: "Hugo Alexander Rondón Quintana / Fredy Alberto Reyes Lizcano", editorial: "Universidad Católica de Colombia", categoria: "Vías y Pavimentos" },
  { idLibro: 4, titulo: "Diseño, Construcción y Mantenimiento de Pavimentos de Concreto", autor: "Diego Sánchez de Guzmán / Tecnológica del Concreto", editorial: "Asocreto", categoria: "Vías y Pavimentos" },
  { idLibro: 5, titulo: "La Ingeniería de Suelos en las Vías Terrestres", autor: "Alfonso Rico Rodríguez / Hermilo del Castillo", editorial: "Limusa", categoria: "Vías y Pavimentos" },
  { idLibro: 6, titulo: "Hidráulica de Tuberías", autor: "Juan Saldarriaga", editorial: "Universidad de los Andes", categoria: "Hidráulica" },
  { idLibro: 7, titulo: "Tecnología del Concreto Asfáltico", autor: "Pedro Antonio Chocontá Pedroza", editorial: "Por Definir", categoria: "Ingeniería Civil" },
  { idLibro: 8, titulo: "Cemento Asfáltico", autor: "John Jairo Agudelo Ospina", editorial: "Por Definir", categoria: "Ingeniería Civil" },
  { idLibro: 9, titulo: "Geodesia para Ingenieros", autor: "Universidad Distrital Francisco José de Caldas", editorial: "UD Editorial", categoria: "Topografía" },
  { idLibro: 10, titulo: "Fundamentos de Fotogrametría para Manejo de Coberturas Vegetales", autor: "Varios Autores", editorial: "Por Definir", categoria: "Ingeniería Civil" },
  { idLibro: 11, titulo: "Mecánica de Pavimentos", autor: "Rodolfo Enrique Sosa Gómez", editorial: "Por Definir", categoria: "Vías y Pavimentos" },
  { idLibro: 12, titulo: "Diseño Racional de Pavimentos", autor: "Fredy Alberto Reyes Lizcano", editorial: "Por Definir", categoria: "Vías y Pavimentos" },
  { idLibro: 13, titulo: "Topografía aplicada para ingenieros", autor: "Varios Autores", editorial: "Por Definir", categoria: "Topografía" },
  { idLibro: 14, titulo: "Cálculo Volumen 1", autor: "Larson / Hostetler / Edwards", editorial: "McGraw-Hill", categoria: "Matemáticas" },
  { idLibro: 15, titulo: "Cálculo Volumen 2", autor: "Larson / Hostetler / Edwards", editorial: "McGraw-Hill", categoria: "Matemáticas" },
  { idLibro: 16, titulo: "Estadística Aplicada", autor: "Ciro Martínez Bencardino", editorial: "Ecoe Ediciones", categoria: "Estadística" },
  { idLibro: 17, titulo: "Ecuaciones Diferenciales Ordinarias", autor: "Luz Marina Moya / Edilberto Rojas", editorial: "Escuela Colombiana de Ingeniería", categoria: "Matemáticas" },
  { idLibro: 18, titulo: "Cálculo Integral en una Variable", autor: "Varios Autores", editorial: "Por Definir", categoria: "Matemáticas" },
  { idLibro: 19, titulo: "Probabilidad: Teoría y Práctica", autor: "Varios Autores", editorial: "Por Definir", categoria: "Estadística" },
  { idLibro: 20, titulo: "Curso Matemáticas Básicas", autor: "Margarita Ospina Pulido", editorial: "Colección Notas de Clase", categoria: "Matemáticas" },
  { idLibro: 21, titulo: "Física (Sexta Edición)", autor: "Jerry D. Wilson / Anthony J. Buffa / Bo Lou", editorial: "Pearson", categoria: "Física" },
  { idLibro: 22, titulo: "Geometría analítica y vectorial", autor: "Julio Alberto Uribe Calad", editorial: "Por Definir", categoria: "Matemáticas" },
  { idLibro: 23, titulo: "El Libro de la Física", autor: "Varios Autores", editorial: "DK", categoria: "Física" },
  { idLibro: 24, titulo: "Python a Fondo", autor: "Pablo E. Fernández Casado", editorial: "Marcombo", categoria: "Programación" },
  { idLibro: 25, titulo: "Java Programación: Teoría y ejemplos", autor: "Mª Isabel Barquilla Galeano", editorial: "Editorial Edu", categoria: "Programación" },
  { idLibro: 26, titulo: "115 ejercicios resueltos de programación C++", autor: "Jofreus / Irypogu", editorial: "Editorial Edu", categoria: "Programación" },
  { idLibro: 27, titulo: "Programación Orientada a Objetos en JAVA", autor: "Francisco Blasco / Miguel Hernández / Luis E. Baquero", editorial: "Editorial Edu", categoria: "Programación" },
  { idLibro: 28, titulo: "C# Lo básico que debe saber: Introducción al Lenguaje C", autor: "Carlos Alberto Vanegas", editorial: "Por Definir", categoria: "Programación" },
  { idLibro: 29, titulo: "Bases de Datos", autor: "Varios Autores", editorial: "Alfaomega", categoria: "Bases de Datos" },
  { idLibro: 30, titulo: "Aprende SQL", autor: "Xavier Reyes Ochoa", editorial: "Por Definir", categoria: "Bases de Datos" },
  { idLibro: 31, titulo: "Construcción y Diseño de Páginas Web con HTML, CSS y JavaScript", autor: "Varios Autores", editorial: "Ra-Ma", categoria: "Desarrollo Web" },
  { idLibro: 32, titulo: "Programación y manejo de datos con Java utilizando NetBeans IDE", autor: "Carlos Alberto Vanegas", editorial: "Por Definir", categoria: "Programación" },
  { idLibro: 33, titulo: "Estatuto General de Contratación Pública", autor: "Varios Autores", editorial: "Por Definir", categoria: "Legislación" },
  { idLibro: 34, titulo: "Función Notarial y Registral Práctica", autor: "Alfonso Montejo Fonseca", editorial: "Por Definir", categoria: "Derecho" },
  { idLibro: 35, titulo: "El Impuesto Predial", autor: "Álvaro Camacho Montoya", editorial: "ICDT", categoria: "Derecho Tributario" },
  { idLibro: 36, titulo: "Ingeniería Económica", autor: "Varios Autores", editorial: "Por Definir", categoria: "Ingeniería" },
  { idLibro: 37, titulo: "Guía de Manejo Ambiental", autor: "Varios Autores", editorial: "Por Definir", categoria: "Medio Ambiente" },
  { idLibro: 38, titulo: "Matemáticas Financieras aplicadas a los negocios", autor: "Omar Gualteros Villarreal", editorial: "Por Definir", categoria: "Finanzas" },
  { idLibro: 39, titulo: "Procedimientos en la propiedad horizontal", autor: "Martha E. Ramírez C.", editorial: "Por Definir", categoria: "Derecho" },
  { idLibro: 40, titulo: "Avalúos de Inmuebles y Garantías", autor: "Óscar A. Borrero Ochoa", editorial: "Ecoe Ediciones", categoria: "Avalúos" },
  { idLibro: 41, titulo: "Metodología de la Investigación", autor: "Roberto Hernández Sampieri", editorial: "McGraw-Hill", categoria: "Investigación" },
  { idLibro: 42, titulo: "Redacción de Documentos Técnicos", autor: "Varios Autores", editorial: "Por Definir", categoria: "Comunicación" },
  { idLibro: 43, titulo: "Administración de Proyectos", autor: "Harold Kerzner", editorial: "McGraw-Hill", categoria: "Administración" },
  { idLibro: 44, titulo: "Gerencia de Proyectos", autor: "Project Management Institute", editorial: "PMI", categoria: "Administración" },
  { idLibro: 45, titulo: "Contabilidad General", autor: "Varios Autores", editorial: "Por Definir", categoria: "Contabilidad" },
  { idLibro: 46, titulo: "Contabilidad Gerencial y Presupuestaria", autor: "Varios Autores", editorial: "Ediciones de la U", categoria: "Contabilidad" },
  { idLibro: 47, titulo: "Finanzas para Ingenieros", autor: "Varios Autores", editorial: "Por Definir", categoria: "Finanzas" },
  { idLibro: 48, titulo: "Ingeniería de Costos", autor: "Varios Autores", editorial: "Ecoe Ediciones", categoria: "Ingeniería" },
  { idLibro: 49, titulo: "Node.js Curso Práctico", autor: "Luciano Pucciarelli", editorial: "Ra-Ma", categoria: "Programación" },
  { idLibro: 50, titulo: "Domine JavaScript (4ª Edición)", autor: "Pablo E. Fernández Casado", editorial: "Ra-Ma", categoria: "Programación" },
  { idLibro: 51, titulo: "Programación con Python", autor: "Varios Autores", editorial: "Ra-Ma", categoria: "Programación" },
  { idLibro: 52, titulo: "Desarrollo de Aplicaciones Web", autor: "Varios Autores", editorial: "Marcombo", categoria: "Desarrollo Web" },
  { idLibro: 53, titulo: "HTML5 y CSS3", autor: "Varios Autores", editorial: "Anaya Multimedia", categoria: "Desarrollo Web" },
  { idLibro: 54, titulo: "JavaScript Moderno", autor: "Varios Autores", editorial: "Anaya Multimedia", categoria: "Programación" },
  { idLibro: 55, titulo: "React", autor: "Varios Autores", editorial: "Marcombo", categoria: "Desarrollo Web" },
  { idLibro: 56, titulo: "Node.js", autor: "Varios Autores", editorial: "Marcombo", categoria: "Programación" },
  { idLibro: 57, titulo: "Next.js", autor: "Varios Autores", editorial: "Marcombo", categoria: "Desarrollo Web" },
  { idLibro: 58, titulo: "Bases de Datos con MySQL", autor: "Varios Autores", editorial: "Alfaomega", categoria: "Bases de Datos" },
  { idLibro: 59, titulo: "Git y GitHub", autor: "Varios Autores", editorial: "Anaya Multimedia", categoria: "Control de Versiones" },
  { idLibro: 60, titulo: "Ingeniería del Software", autor: "Ian Sommerville", editorial: "Pearson", categoria: "Ingeniería de Software" },
  { idLibro: 61, titulo: "Patrones de Diseño", autor: "Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides", editorial: "Addison-Wesley", categoria: "Programación" },
  { idLibro: 62, titulo: "Clean Code", autor: "Robert C. Martin", editorial: "Prentice Hall", categoria: "Ingeniería de Software" }
];
 
let nextIdLibro =
    Math.max(...productos.map(p => p.idLibro)) + 1;
 
export function getProductos() {
  return productos;
}
 
export function getProductoById(idLibro) {
  return productos.find(p => p.idLibro === Number(idLibro));
}
 
export function createProducto(data) {
  const nuevo = { idLibro: nextIdLibro++, ...data };
  productos.push(nuevo);
  return nuevo;
}
 
export function updateProducto(idLibro, data) {
  const index = productos.findIndex(p => p.idLibro === Number(idLibro));
  if (index === -1) return null;
  productos[index] = { ...productos[index], ...data };
  return productos[index];
}
 
export function deleteProducto(idLibro) {
  const index = productos.findIndex(p => p.idLibro === Number(idLibro));
  if (index === -1) return false;
  productos.splice(index, 1);
  return true;
}




