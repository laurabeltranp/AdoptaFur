"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Image from "next/image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Guard from "@/components/guard/guard";
import LogOutButton from "@/components/logoutBtn/logoutbtn.js";

export const NavBar = () => {
  const [nombre, setNombre] = useState("");
  useEffect(() => {
    setNombre(localStorage.getItem("nombre"));
  }, []);
  return (
<Navbar expand="lg" className="bg-body-tertiary navbar-custom fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src="/logoAdoptaFondoBlanco.png"
            width={100}
            height={78}
            className="logo-small"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="nav-link" href="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Adoptar" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-dropdown-item" href="/comoAdoptar">
                ¿Cómo adoptar?
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="/sobreNosotros">
                Sobre Nosotros
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="/historiasFelices">
                Historias felices
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/companerosDisponibles">
              Compañeros Disponibles
            </Nav.Link>
            <Guard requiredRoles={["Usuario"]}>
              <Nav.Link className="nav-link" href="/misSolicitudes">
                Mis solicitudes
              </Nav.Link>
            </Guard>
            <Guard requiredRoles={["Protectora"]}>
              <Nav.Link className="nav-link" href="/misMascotas">
                Mis mascotas
              </Nav.Link>
            </Guard>
            <Guard requiredRoles={["Protectora", "Usuario"]}>
              <Nav.Link className="nav-link" href="/perfil">
                Perfil
              </Nav.Link>
            </Guard>
          </Nav>
          <Nav className="mx-5">
            <Guard requiredRoles={["Protectora", "Usuario"]}>
              <Navbar.Text className="mx-3">Signed in as: {nombre}</Navbar.Text>
            </Guard>
            <Form>
              <Guard requiredRoles={["Anonymous"]}>
                <Button href="/acceso" variant="success">
                  Acceso
                </Button>
              </Guard>
              <Guard requiredRoles={["Anonymous"]}>
                <Button href="/registro" variant="primary">
                  Regístrate
                </Button>
              </Guard>
              <Guard requiredRoles={["Protectora", "Usuario"]}>
                <LogOutButton></LogOutButton>
              </Guard>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
