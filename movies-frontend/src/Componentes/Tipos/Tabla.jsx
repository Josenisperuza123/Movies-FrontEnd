import React from 'react'
import Fila from './Fila'

export default function Tabla({ tipos, seleccionarTipo, eliminarTipo }) {
  return (
    <table className="table table-striped table-hover shadow rounded">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          tipos.map((tipo, index) => (
            <Fila
              key={tipo._id}
              index={index}
              tipo={tipo}
              seleccionarTipo={seleccionarTipo}
              eliminarTipo={eliminarTipo}
            />
          ))
        }
      </tbody>
    </table>
  )
}
