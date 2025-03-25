import React from 'react'
import Fila from './Fila'

export default function Tabla({ medias, seleccionarMedia, eliminarMedia }) {
  return (
    <table className="table table-striped table-hover shadow rounded">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Sinopsis</th>
          <th>URL</th>
          <th>Portada</th>
          <th>Género</th>
          <th>Director</th>
          <th>Productora</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          medias.map((media, index) => (
            <Fila
              key={media._id}
              index={index}
              media={media}
              seleccionarMedia={seleccionarMedia}
              eliminarMedia={eliminarMedia}
            />
          ))
        }
      </tbody>
    </table>
  )
}
