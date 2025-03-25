import React from 'react'

export default function Fila({ media, index, seleccionarMedia, eliminarMedia }) {
  return (
    <tr key={media._id}>
      <th scope="row">{index + 1}</th>
      <td>{media.titulo}</td>
      <td>{media.sinopsis}</td>
      <td>{media.URL}</td>
      <td>
        <img src={media.portada} alt="portada" width="80" height="50" style={{ objectFit: 'cover' }} />
      </td>
      <td>{media.genero?.nombre || 'Sin género'}</td>
      <td>{media.director?.nombre || 'Sin director'}</td>
      <td>{media.productora?.nombre || 'Sin productora'}</td>
      <td>{media.tipo?.nombre || 'Sin tipo'}</td>
      <td>{media.estado ? 'Activo' : 'Inactivo'}</td>
      <td>{new Date(media.fechaCreacion).toLocaleDateString()}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => seleccionarMedia(media)}
        >
          Editar
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarMedia(media._id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
