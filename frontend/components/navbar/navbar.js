'use client'
import React from 'react'
import './navbar.css'
import Image from "next/image";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src="/logoAdoptaFondoBlanco.png" width={100} height={78} className="logo-small" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link className="nav-link" href="/">Inicio</Nav.Link>
            <NavDropdown title="Adoptar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/comoAdoptar">¿Como adoptar?</NavDropdown.Item>
              <NavDropdown.Item href="/mascotas">
                Compañeros disponibles
              </NavDropdown.Item>
              <NavDropdown.Item href="/historiasFelices">Historias felices</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/sobreNosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link className="nav-link" href="/misSolicitudes">Mis solicitudes</Nav.Link>
            <Nav.Link className="nav-link" href="/misMascotas">Mis mascotas</Nav.Link>
            <Nav.Link className="nav-link" href="/contacto">Contacto</Nav.Link>
          </Nav>
          <Nav className="mx-5">
            <Form>
            <Button href="/acceso" variant="success">Acceso</Button>
            <Button href="/registro" variant="primary">Register</Button>

            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;