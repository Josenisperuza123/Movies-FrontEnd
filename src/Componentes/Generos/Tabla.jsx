import React from 'react'
import Fila from './Fila'

export default function Tabla({ generos, seleccionarGenero, eliminarGenero }) {
  return (
    <table className="table table-striped table-hover shadow rounded">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          generos.map((genero, index) => (
            <Fila
              key={genero._id}
              index={index}
              genero={genero}
              seleccionarGenero={seleccionarGenero}
              eliminarGenero={eliminarGenero}
            />
          ))
        }
      </tbody>
    </table>
  )
}
