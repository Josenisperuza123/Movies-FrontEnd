import { axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
  'Content-Type': 'application/json'
};

// Crear tipo (POST)
const crearTipo = (tipo) => {
  const data = {
    nombre: tipo.nombre,
    descripcion: tipo.descripcion,
    estado: tipo.estado
  };
  return axiosconfiguracion.post('/tipo', data, { headers });
};

// Consultar todos (GET)
const consultarTipos = () => {
  return axiosconfiguracion.get('/tipo', { headers });
};

// Consultar por ID (GET)
const consultarTipoporId = (id) => {
  return axiosconfiguracion.get(`/tipo/${id}`, { headers });
};

// Editar tipo (PATCH)
const editarTipo = (id, tipo) => {
  const data = {
    nombre: tipo.nombre,
    descripcion: tipo.descripcion,
    estado: tipo.estado
  };
  return axiosconfiguracion.patch(`/tipo/${id}`, data, { headers });
};

// Eliminar tipo (DELETE)
const eliminarTipoPorId = (id) => {
  return axiosconfiguracion.delete(`/tipo/${id}`, { headers });
};

export {
  crearTipo,
  consultarTipos,
  consultarTipoporId,
  editarTipo,
  eliminarTipoPorId
};
