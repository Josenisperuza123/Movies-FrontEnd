import React from 'react'
import Fila from './Fila'

export default function Tabla({ directores, seleccionarDirector, eliminarDirector }) {
  return (
    <table className="table table-striped table-hover shadow rounded">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          directores.map((director, index) => (
            <Fila
              key={director._id}
              index={index}
              director={director}
              seleccionarDirector={seleccionarDirector}
              eliminarDirector={eliminarDirector}
            />
          ))
        }
      </tbody>
    </table>
  )
}
