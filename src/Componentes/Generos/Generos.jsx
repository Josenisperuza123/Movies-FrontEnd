import React, { useEffect, useState } from 'react'
import {
  crearGenero,
  consultarGeneros,
  editarGenero,
  eliminarGeneroPorId
} from '../../Servicios/Generoservicio'
import Tabla from './Tabla'
import Cargando from './Cargando'
import Modal from './Modal'

export default function Generos() {
  const [generos, setGeneros] = useState([])
  const [cargando, setCargando] = useState(false)
  const [genero, setGenero] = useState({
    nombre: '',
    descripcion: '',
    estado: true
  })

  useEffect(() => {
    listarGeneros()
  }, [])

  const listarGeneros = async () => {
    setCargando(true)
    try {
      const { data } = await consultarGeneros()
      setGeneros(data)
    } catch (e) {
      console.log('Error al listar géneros:', e)
    } finally {
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (genero._id) {
        await editarGenero(genero._id, genero)
      } else {
        await crearGenero(genero)
      }
      listarGeneros()
      clearGenero()
    } catch (e) {
      console.log('Error al guardar género:', e)
    } finally {
      setCargando(false)
    }
  }

  const eliminarGenero = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este género?')) return
    setCargando(true)
    try {
      await eliminarGeneroPorId(id)
      listarGeneros()
    } catch (e) {
      console.log('Error al eliminar género:', e)
    } finally {
      setCargando(false)
    }
  }

  const seleccionarGenero = (generoSeleccionado) => {
    setGenero({ ...generoSeleccionado })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const val = name === 'estado' ? (value === 'true') : value
    setGenero({
      ...genero,
      [name]: val
    })
  }

  const clearGenero = () => {
    setGenero({
      nombre: '',
      descripcion: '',
      estado: true
    })
  }

  return (
    <>
      <Modal
        genero={genero}
        handleChange={handleChange}
        guardar={guardar}
        clearGenero={clearGenero}
      />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Gestión de Géneros</h3>
          <button
            onClick={clearGenero}
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Nuevo Género
          </button>
        </div>

        {cargando ? (
          <Cargando />
        ) : (
          <Tabla
            generos={generos}
            seleccionarGenero={seleccionarGenero}
            eliminarGenero={eliminarGenero}
          />
        )}
      </div>
    </>
  )
}
