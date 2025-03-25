import React from 'react'
import NavBar from '../Componentes/Comunes/NavBar'
import { Route, Routes } from 'react-router-dom'
import Generos from '../Componentes/Generos/Generos'
import Director from '../Componentes/Directores/Director'
import Productora from '../Componentes/Productoras/Productora'
import Tipo from '../Componentes/Tipos/Tipo'
import Media from '../Componentes/Media/Media'
import NotFound from '../Componentes/Comunes/NotFound'
import Footer from '../Componentes/Comunes/Footer'
import GestionMedia from '../Componentes/Media/GestionMedia'

export default function AppRouter() {

  const TITLE = ' IUD Películas '

  return (
    <>
      <NavBar title={TITLE} />

      <main className="container">
        <Routes>
          <Route path="/" element={<Media />} />
          <Route path="/Generos" element={<Generos />} />
          <Route path="/Directores" element={<Director />} />
          <Route path="/Productoras" element={<Productora />} />
          <Route path="/Tipos" element={<Tipo />} />
          <Route path="/Media" element={<GestionMedia />} />
          <Route path="*" element={<NotFound />} />
        </ Routes>
      </main>

      <Footer />
    </>
  )
}
