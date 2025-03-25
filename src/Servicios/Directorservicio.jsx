import { axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
  'Content-Type': 'application/json'
};

// Crear director (POST)
const createDirector = (director) => {
  const data = {
    nombre: director.nombre,
    estado: director.estado
  };
  return axiosconfiguracion.post('/directores', data, { headers });
};

// Consultar todos (GET)
const consultarDirectores = () => {
  return axiosconfiguracion.get('/directores', { headers });
};

// Consultar por ID (GET)
const consultarDirectorporId = (id) => {
  return axiosconfiguracion.get(`/directores/${id}`, { headers });
};

// Editar director (PATCH)
const editarDirector = (id, director) => {
  const data = {
    nombre: director.nombre,
    estado: director.estado
  };
  return axiosconfiguracion.patch(`/directores/${id}`, data, { headers });
};

// Eliminar director (DELETE)
const eliminarDirectorPorId = (id) => {
  return axiosconfiguracion.delete(`/directores/${id}`, { headers });
};

export {
  createDirector,
  consultarDirectores,
  consultarDirectorporId,
  editarDirector,
  eliminarDirectorPorId
};
