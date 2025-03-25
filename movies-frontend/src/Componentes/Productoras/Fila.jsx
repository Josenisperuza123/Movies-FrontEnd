import React from 'react'

export default function Fila({ productora, index, seleccionarProductora, eliminarProductora }) {
  return (
    <tr key={productora._id}>
      <th scope="row">{index + 1}</th>
      <td>{productora.nombre}</td>
      <td>{productora.slogan}</td>
      <td>{productora.descripcion}</td>
      <td>{productora.estado ? 'Activo' : 'Inactivo'}</td>
      <td>{new Date(productora.fechaCreacion).toLocaleDateString()}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => seleccionarProductora(productora)}
        >
          Editar
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarProductora(productora._id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
