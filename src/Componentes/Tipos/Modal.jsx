import React from 'react';

export default function Modal({ tipo, handleChange, guardar, clearTipo }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content border-0 shadow rounded-3">
          <div className="modal-header bg-dark text-white">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {tipo._id ? 'Editar Tipo' : 'Registrar Tipo'}
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  onChange={handleChange}
                  value={tipo.nombre}
                  placeholder="Ej. Película, Serie"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  onChange={handleChange}
                  value={tipo.descripcion}
                  placeholder="Descripción del tipo multimedia"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado</label>
                <select
                  className="form-select"
                  id="estado"
                  name="estado"
                  onChange={handleChange}
                  value={tipo.estado}
                >
                  <option value={true}>Activo</option>
                  <option value={false}>Inactivo</option>
                </select>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearTipo}>
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                if (!tipo.nombre) {
                  alert('El nombre es obligatorio');
                  return;
                }
                guardar();
              }}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
