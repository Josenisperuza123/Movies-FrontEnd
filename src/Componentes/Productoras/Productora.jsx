import React, { useEffect, useState } from 'react'
import {
  crearProductora,
  consultarProductoras,
  editarProductora,
  eliminarProductoraPorId
} from '../../Servicios/Productoraservicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function Productoras() {
  const [productoras, setProductoras] = useState([])
  const [cargando, setCargando] = useState(false)
  const [productora, setProductora] = useState({
    nombre: '',
    slogan: '',
    descripcion: '',
    estado: true
  })

  useEffect(() => {
    listarProductoras()
  }, [])

  const listarProductoras = async () => {
    setCargando(true)
    try {
      const { data } = await consultarProductoras()
      setProductoras(data)
    } catch (e) {
      console.log('Error al listar productoras:', e)
    } finally {
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (productora._id) {
        await editarProductora(productora._id, productora)
      } else {
        await crearProductora(productora)
      }
      listarProductoras()
      clearProductora()
    } catch (e) {
      console.log('Error al guardar productora:', e)
    } finally {
      setCargando(false)
    }
  }

  const eliminarProductora = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta productora?')) return
    setCargando(true)
    try {
      await eliminarProductoraPorId(id)
      listarProductoras()
    } catch (e) {
      console.log('Error al eliminar productora:', e)
    } finally {
      setCargando(false)
    }
  }

  const seleccionarProductora = (productoraSeleccionada) => {
    setProductora({ ...productoraSeleccionada })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const val = name === 'estado' ? value === 'true' : value
    setProductora({
      ...productora,
      [name]: val
    })
  }

  const clearProductora = () => {
    setProductora({
      nombre: '',
      slogan: '',
      descripcion: '',
      estado: true
    })
  }

  return (
    <>
      <Modal
        productora={productora}
        handleChange={handleChange}
        guardar={guardar}
        clearProductora={clearProductora}
      />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Gestión de Productoras</h3>
          <button
            onClick={clearProductora}
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Nueva Productora
          </button>
        </div>

        {cargando ? (
          <Cargando />
        ) : (
          <Tabla
            productoras={productoras}
            seleccionarProductora={seleccionarProductora}
            eliminarProductora={eliminarProductora}
          />
        )}
      </div>
    </>
  )
}
