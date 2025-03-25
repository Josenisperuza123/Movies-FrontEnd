import { axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
  'Content-Type': 'application/json'
};

// Crear género (POST)
const crearGenero = (genero) => {
  const data = {
    nombre: genero.nombre,
    descripcion: genero.descripcion,
    estado: genero.estado
  };
  return axiosconfiguracion.post('/generos', data, { headers });
};

// Consultar todos los géneros (GET)
const consultarGeneros = () => {
  return axiosconfiguracion.get('/generos', { headers });
};

// Consultar género por ID (GET)
const consultarGeneroporId = (id) => {
  return axiosconfiguracion.get('/generos/' + id, { headers });
};

// Editar género (PATCH)
const editarGenero = (id, genero) => {
  const data = {
    nombre: genero.nombre,
    descripcion: genero.descripcion,
    estado: genero.estado
  };
  return axiosconfiguracion.patch('/generos/' + id, data, { headers });
};

// Eliminar género (DELETE)
const eliminarGeneroPorId = (id) => {
  return axiosconfiguracion.delete('/generos/' + id, { headers });
};

export {
  crearGenero,
  consultarGeneros,
  consultarGeneroporId,
  editarGenero,
  eliminarGeneroPorId
};
