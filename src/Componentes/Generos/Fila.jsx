import React from 'react'

export default function Fila({ genero, index, seleccionarGenero, eliminarGenero }) {
  return (
    <tr key={genero._id}>
      <th scope="row">{index + 1}</th>
      <td>{genero.nombre}</td>
      <td>{genero.descripcion}</td>
      <td>{genero.estado ? 'Activo' : 'Inactivo'}</td>
      <td>{new Date(genero.fechaCreacion).toLocaleDateString()}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => seleccionarGenero(genero)}
        >
          Editar
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarGenero(genero._id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
