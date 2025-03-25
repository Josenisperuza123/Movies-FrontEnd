import React from 'react'

export default function Fila({ director, index, seleccionarDirector, eliminarDirector }) {
  return (
    <tr key={director._id}>
      <th scope="row">{index + 1}</th>
      <td>{director.nombre}</td>
      <td>{director.estado ? 'Activo' : 'Inactivo'}</td>
      <td>{new Date(director.fechaCreacion).toLocaleDateString()}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => seleccionarDirector(director)}
        >
          Editar
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarDirector(director._id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
