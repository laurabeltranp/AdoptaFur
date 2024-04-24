'use client'
import React from 'react'
import './navbar.css'
import Link from 'next/link';
import Image from "next/image";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
      <a className="navbar-brand" href="/">
        <Image src="/logoAdoptaFondoBlanco.png" width={100} height={78} className="logo-small" alt="Logo" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/">Inicio</Link>
          </li>
          <NavDropdown title="Adoptar" id="basic-nav-dropdown">
            <NavDropdown.Item href="/comoAdoptar">¿Como adoptar?</NavDropdown.Item>
            <NavDropdown.Item href="/mascotas">
              Compañeros disponibles
            </NavDropdown.Item>
            <NavDropdown.Item href="/historiasFelices">Historias felices</NavDropdown.Item>
          </NavDropdown>
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