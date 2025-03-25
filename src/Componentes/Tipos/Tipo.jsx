import React, { useEffect, useState } from 'react'
import {
  crearTipo,
  consultarTipos,
  editarTipo,
  eliminarTipoPorId
} from '../../Servicios/Tiposervicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function Tipos() {
  const [tipos, setTipos] = useState([])
  const [cargando, setCargando] = useState(false)
  const [tipo, setTipo] = useState({
    nombre: '',
    descripcion: '',
    estado: true
  })

  useEffect(() => {
    listarTipos()
  }, [])

  const listarTipos = async () => {
    setCargando(true)
    try {
      const { data } = await consultarTipos()
      setTipos(data)
    } catch (e) {
      console.log(e)
    } finally {
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (tipo._id) {
        await editarTipo(tipo._id, tipo)
      } else {
        await crearTipo(tipo)
      }
      listarTipos()
      clearTipo()
    } catch (e) {
      console.log(e)
    } finally {
      setCargando(false)
    }
  }

  const eliminarTipo = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este tipo?')) return
    setCargando(true)
    try {
      await eliminarTipoPorId(id)
      listarTipos()
    } catch (e) {
      console.log(e)
    } finally {
      setCargando(false)
    }
  }

  const seleccionarTipo = (tipoSeleccionado) => {
    setTipo({ ...tipoSeleccionado })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const val = name === 'estado' ? value === 'true' : value
    setTipo({
      ...tipo,
      [name]: val
    })
  }

  const clearTipo = () => {
    setTipo({
      nombre: '',
      descripcion: '',
      estado: true
    })
  }

  return (
    <>
      <Modal
        tipo={tipo}
        handleChange={handleChange}
        guardar={guardar}
        clearTipo={clearTipo}
      />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Gestión de Tipos</h3>
          <button
            onClick={clearTipo}
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Nuevo Tipo
          </button>
        </div>

        {cargando ? (
          <Cargando />
        ) : (
          <Tabla
            tipos={tipos}
            seleccionarTipo={seleccionarTipo}
            eliminarTipo={eliminarTipo}
          />
        )}
      </div>
    </>
  )
}
