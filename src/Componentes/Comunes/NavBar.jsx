import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar ({ title = ''}) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="/favicon.ico" 
                    alt="Logo" 
                    width="28" 
                    height="30" 
                    className="d-inline-block align-text-top" />
                    { title }
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                        to='/'
                        className='nav-link'
                        >
                        Inicio
                        </NavLink>
                        <NavLink
                        to='/Generos'
                        className='nav-link'
                        >
                        Géneros
                        </NavLink>
                        <NavLink
                        to='/Directores'
                        className='nav-link'
                        >
                        Directores
                        </NavLink>
                        <NavLink
                        to='/Productoras'
                        className='nav-link'
                        >
                        Productoras
                        </NavLink>
                        <NavLink
                        to='/Tipos'
                        className='nav-link'
                        >
                        Tipos
                        </NavLink>
                        <NavLink
                        to='/Media'
                        className='nav-link'
                        >
                        Media
                        </NavLink>                   
                      
                    
                    </div>
                </div>
            </div>
        </nav>
    </div>
)
}
