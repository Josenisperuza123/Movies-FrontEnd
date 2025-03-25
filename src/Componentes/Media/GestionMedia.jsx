import React, { useEffect, useState } from 'react'
import {
  crearGestionMedia,
  consultarGestionMedias,
  editarGestionMedia,
  eliminarGestionMediaPorId
} from '../../Servicios/GestionMediaservicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function GestionMedia() {
  const [medias, setMedias] = useState([])
  const [cargando, setCargando] = useState(false)
  const [media, setMedia] = useState({
    serial: '',
    titulo: '',
    sinopsis: '',
    URL: '',
    portada: '',
    estreno: '',
    genero: '',
    director: '',
    productora: '',
    tipo: '',
    estado: true
  })

  useEffect(() => {
    listarMedias()
  }, [])

  const listarMedias = async () => {
    setCargando(true)
    try {
      const { data } = await consultarGestionMedias()
      setMedias(data)
    } catch (e) {
      console.log(e)
    } finally {
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      if (media._id) {
        await editarGestionMedia(media._id, media)
      } else {
        await crearGestionMedia(media)
      }
      listarMedias()
      clearMedia()
    } catch (e) {
      console.log(e)
    } finally {
      setCargando(false)
    }
  }

  const eliminarMedia = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta producción?')) return
    setCargando(true)
    try {
      await eliminarGestionMediaPorId(id)
      listarMedias()
    } catch (e) {
      console.log(e)
    } finally {
      setCargando(false)
    }
  }

  const seleccionarMedia = (mediaSeleccionada) => {
    setMedia({ ...mediaSeleccionada })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const val = name === 'estado' ? value === 'true' : value
    setMedia({
      ...media,
      [name]: val
    })
  }

  const clearMedia = () => {
    setMedia({
      serial: '',
      titulo: '',
      sinopsis: '',
      URL: '',
      portada: '',
      estreno: '',
      genero: '',
      director: '',
      productora: '',
      tipo: '',
      estado: true
    })
  }

  return (
    <>
      <Modal
        media={media}
        handleChange={handleChange}
        guardar={guardar}
        clearMedia={clearMedia}
      />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Gestión de Películas y Series</h3>
          <button
            onClick={clearMedia}
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Nueva Producción
          </button>
        </div>

        {cargando ? (
          <Cargando />
        ) : (
          <Tabla
            medias={medias}
            seleccionarMedia={seleccionarMedia}
            eliminarMedia={eliminarMedia}
          />
        )}
      </div>
    </>
  )
}
