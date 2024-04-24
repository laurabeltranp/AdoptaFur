import React from "react";
import "./navbar.css";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
      <a className="navbar-brand" href="/">
        <img
          src="/logoAdoptaFondoBlanco.png"
          className="logo-small"
          alt="Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownAnimales"
              role="button"
              aria-expanded="false"
            >
              Adoptar
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownAnimales"
            >
              <li>
                <Link className="dropdown-item" href="/comoAdoptar">
                  ¿Cómo adoptar?
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/disponibles">
                  Compañeros disponibles
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/adoptados">
                  Historias felices
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/sobreNosotros">
              Sobre Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/misSolicitudes">
              Mis solicitudes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/misMascotas">
              Mis mascotas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Acceso
        </button>
      </form>
    </nav>
  );
};
export default NavBar;
