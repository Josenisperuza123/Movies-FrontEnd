import { axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
  'Content-Type': 'application/json'
};

// Crear una producción (POST)
const crearGestionMedia = (Media) => {
  const data = {
    serial: Media.serial,
    titulo: Media.titulo,
    sinopsis: Media.sinopsis,
    URL: Media.URL,
    portada: Media.portada,
    estreno: Media.estreno,
    estado: Media.estado,
    genero: Media.genero,
    director: Media.director,
    productora: Media.productora,
    tipo: Media.tipo
  };
  return axiosconfiguracion.post('/media', data, { headers });
};

// Consultar todas las producciones (GET)
const consultarGestionMedias = () => {
  return axiosconfiguracion.get('/media', { headers });
};

// Consultar una producción por ID (GET)
const consultarGestionMediaporId = (id) => {
  return axiosconfiguracion.get(`/media/${id}`, { headers });
};

// Editar parcialmente (PATCH)
const editarGestionMedia = (id, Media) => {
  const data = {
    serial: Media.serial,
    titulo: Media.titulo,
    sinopsis: Media.sinopsis,
    URL: Media.URL,
    portada: Media.portada,
    estreno: Media.estreno,
    estado: Media.estado,
    genero: Media.genero,
    director: Media.director,
    productora: Media.productora,
    tipo: Media.tipo
  };
  return axiosconfiguracion.patch(`/media/${id}`, data, { headers });
};

// Eliminar una producción (DELETE)
const eliminarGestionMediaPorId = (id) => {
  return axiosconfiguracion.delete(`/media/${id}`, { headers });
};

// Obtener géneros
const obtenerGeneros = () => {
  return axiosconfiguracion.get('/generos', { headers })
    .then(res => res.data)
    .catch(() => []);
};

// Obtener directores
const obtenerDirectores = () => {
  return axiosconfiguracion.get('/directores', { headers })
    .then(res => res.data)
    .catch(() => []);
};

// Obtener productoras
const obtenerProductoras = () => {
  return axiosconfiguracion.get('/productoras', { headers })
    .then(res => res.data)
    .catch(() => []);
};

// Obtener tipos
const obtenerTipos = () => {
  return axiosconfiguracion.get('/tipos', { headers })
    .then(res => res.data)
    .catch(() => []);
};

// Exportar todas las funciones
export {
  crearGestionMedia,
  consultarGestionMedias,
  consultarGestionMediaporId,
  editarGestionMedia,
  eliminarGestionMediaPorId,
  obtenerGeneros,
  obtenerDirectores,
  obtenerProductoras,
  obtenerTipos
};
