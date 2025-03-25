import React, { useEffect, useState } from 'react';
import {
  obtenerGeneros,
  obtenerDirectores,
  obtenerProductoras,
  obtenerTipos
} from '../../Servicios/GestionMediaservicio';

export default function Modal({ media, handleChange, guardar, clearMedia }) {
  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    obtenerGeneros().then(setGeneros);
    obtenerDirectores().then(setDirectores);
    obtenerProductoras().then(setProductoras);
    obtenerTipos().then(setTipos);
  }, []);

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content border-0 shadow rounded-3">
          <div className="modal-header bg-dark text-white">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {media._id ? 'Editar Producción' : 'Registrar Producción'}
            </h1>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Serial</label>
                  <input type="text" className="form-control" name="serial" value={media.serial} onChange={handleChange} />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Título</label>
                  <input type="text" className="form-control" name="titulo" value={media.titulo} onChange={handleChange} />
                </div>

                <div className="mb-3 col-md-12">
                  <label className="form-label">Sinopsis</label>
                  <textarea className="form-control" name="sinopsis" value={media.sinopsis} onChange={handleChange} />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">URL</label>
                  <input type="text" className="form-control" name="url" value={media.url} onChange={handleChange} />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Portada (imagen)</label>
                  <input type="text" className="form-control" name="portada" value={media.portada} onChange={handleChange} />
                </div>

                <div className="mb-3 col-md-4">
                  <label className="form-label">Año de estreno</label>
                  <input type="text" className="form-control" name="anio" value={media.anio} onChange={handleChange} />
                </div>

                <div className="mb-3 col-md-4">
                  <label className="form-label">Estado</label>
                  <select className="form-select" name="estado" value={media.estado} onChange={handleChange}>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>

                <div className="mb-3 col-md-4">
                  <label className="form-label">Género</label>
                  <select className="form-select" name="genero" value={media.genero} onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {generos.map(g => (
                      <option key={g._id} value={g._id}>{g.nombre}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3 col-md-4">
                  <label className="form-label">Director</label>
                  <select className="form-select" name="director" value={media.director} onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {directores.map(d => (
                      <option key={d._id} value={d._id}>{d.nombre}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3 col-md-4">
                  <label className="form-label">Productora</label>
                  <select className="form-select" name="productora" value={media.productora} onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {productoras.map(p => (
                      <option key={p._id} value={p._id}>{p.nombre}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3 col-md-4">
                  <label className="form-label">Tipo</label>
                  <select className="form-select" name="tipo" value={media.tipo} onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {tipos.map(t => (
                      <option key={t._id} value={t._id}>{t.nombre}</option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={clearMedia}>Cancelar</button>
            <button type="button" className="btn btn-success" onClick={guardar}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
