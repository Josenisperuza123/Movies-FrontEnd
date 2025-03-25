import React from 'react'

export default function Fila({ tipo, index, seleccionarTipo, eliminarTipo }) {
  return (
    <tr key={tipo._id}>
      <th scope="row">{index + 1}</th>
      <td>{tipo.nombre}</td>
      <td>{tipo.descripcion}</td>
      <td>{tipo.estado ? 'Activo' : 'Inactivo'}</td>
      <td>{new Date(tipo.fechaCreacion).toLocaleDateString()}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => seleccionarTipo(tipo)}
        >
          Editar
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarTipo(tipo._id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
