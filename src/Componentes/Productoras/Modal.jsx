import React from 'react';

export default function Modal({ productora, handleChange, guardar, clearProductora }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content border-0 shadow rounded-3">
          <div className="modal-header bg-dark text-white">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {productora._id ? 'Editar Productora' : 'Registrar Productora'}
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
                  value={productora.nombre}
                  placeholder="Nombre de la productora"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="slogan" className="form-label">Slogan</label>
                <input
                  type="text"
                  className="form-control"
                  id="slogan"
                  name="slogan"
                  onChange={handleChange}
                  value={productora.slogan}
                  placeholder="Eslogan institucional"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  onChange={handleChange}
                  value={productora.descripcion}
                  placeholder="Descripción breve de la productora"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado</label>
                <select
                  className="form-select"
                  id="estado"
                  name="estado"
                  onChange={handleChange}
                  value={productora.estado}
                >
                  <option value={true}>Activo</option>
                  <option value={false}>Inactivo</option>
                </select>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={clearProductora}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                if (!productora.nombre) {
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
