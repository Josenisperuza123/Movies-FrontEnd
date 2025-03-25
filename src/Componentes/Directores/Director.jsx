import React, { useEffect, useState } from 'react'
import {
  createDirector,
  consultarDirectores,
  editarDirector,
  eliminarDirectorPorId
} from '../../Servicios/Directorservicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function Directores() {
  const [directores, setDirectores] = useState([])
  const [cargando, setCargando] = useState(false)
  const [director, setDirector] = useState({
    nombre: '',
    estado: true
  })

  useEffect(() => {
    listarDirectores()
  }, [])

  const listarDirectores = async () => {
    setCargando(true)
    try {
      const { data } = await consultarDirectores()
      setDirectores(data)
    } catch (e) {
      console.log('Error al listar directores:', e)
    } finally {
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (director._id) {
        await editarDirector(director._id, director)
      } else {
        await createDirector(director)
      }
      listarDirectores()
      clearDirector()
    } catch (e) {
      console.log('Error al guardar director:', e)
    } finally {
      setCargando(false)
    }
  }

  const eliminarDirector = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este director?')) return
    setCargando(true)
    try {
      await eliminarDirectorPorId(id)
      listarDirectores()
    } catch (e) {
      console.log('Error al eliminar director:', e)
    } finally {
      setCargando(false)
    }
  }

  const seleccionarDirector = (directorSeleccionado) => {
    setDirector({ ...directorSeleccionado })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const val = name === 'estado' ? value === 'true' : value
    setDirector({
      ...director,
      [name]: val
    })
  }

  const clearDirector = () => {
    setDirector({
      nombre: '',
      estado: true
    })
  }

  return (
    <>
      <Modal
        director={director}
        handleChange={handleChange}
        guardar={guardar}
        clearDirector={clearDirector}
      />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Gestión de Directores</h3>
          <button
            onClick={clearDirector}
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Nuevo Director
          </button>
        </div>

        {cargando ? (
          <Cargando />
        ) : (
          <Tabla
            directores={directores}
            seleccionarDirector={seleccionarDirector}
            eliminarDirector={eliminarDirector}
          />
        )}
      </div>
    </>
  )
}
