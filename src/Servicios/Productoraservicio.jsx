import { axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
  'Content-Type': 'application/json'
};

// Crear productora (POST)
const crearProductora = (productora) => {
  const data = {
    nombre: productora.nombre,
    slogan: productora.slogan,
    descripcion: productora.descripcion,
    estado: productora.estado
  };
  return axiosconfiguracion.post('/productoras', data, { headers });
};

// Consultar todas (GET)
const consultarProductoras = () => {
  return axiosconfiguracion.get('/productoras', { headers });
};

// Consultar por ID (GET)
const consultarProductoraporId = (id) => {
  return axiosconfiguracion.get(`/productoras/${id}`, { headers });
};

// Editar productora (PATCH)
const editarProductora = (id, productora) => {
  const data = {
    nombre: productora.nombre,
    slogan: productora.slogan,
    descripcion: productora.descripcion,
    estado: productora.estado
  };
  return axiosconfiguracion.patch(`/productoras/${id}`, data, { headers });
};

// Eliminar productora (DELETE)
const eliminarProductoraPorId = (id) => {
  return axiosconfiguracion.delete(`/productoras/${id}`, { headers });
};

export {
  crearProductora,
  consultarProductoras,
  consultarProductoraporId,
  editarProductora,
  eliminarProductoraPorId
};
