import React from 'react'
import './navbar.css'
import Link from 'next/link';
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
      <a className="navbar-brand" href="/">
        <Image src="/logoAdoptaFondoBlanco.png" className="logo-small" alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAnimales" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Adoptar
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownAnimales">
              <Link className="nav-link" href="/comoAdoptar">¿Cómo adoptar?</Link>
              <Link className="nav-link" href="/disponibles">Compañeros disponibles</Link>
              <Link className="nav-link" href="/adoptados">Historias felices</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/sobreNosotros">Sobre Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/misSolicitudes">Mis solicitudes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/misMascotas">Mis mascotas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Acceso</button>
      </form>
    </nav>

  )
}
export default NavBar;