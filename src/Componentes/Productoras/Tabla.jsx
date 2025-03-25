import React from 'react'
import Fila from './Fila'

export default function Tabla({ productoras, seleccionarProductora, eliminarProductora }) {
  return (
    <table className="table table-striped table-hover shadow rounded">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Slogan</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          productoras.map((productora, index) => (
            <Fila
              key={productora._id}
              index={index}
              productora={productora}
              seleccionarProductora={seleccionarProductora}
              eliminarProductora={eliminarProductora}
            />
          ))
        }
      </tbody>
    </table>
  )
}
