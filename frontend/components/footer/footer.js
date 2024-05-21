import React from 'react'
import './footer.css'
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4 position-absolute-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <Image src="/logoAdoptaFondoBlanco.png" width={100} height={78} className="logo-small"
                               alt="Logo"/>
                        <p className="text-light">Adopta a tu compañero de vida</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Navegación</h5>
                        <ul className="list-unstyled">
                            <li><a className="text-light text-decoration-none" href="index.html">Inicio</a></li>
                            <li><a className="text-light text-decoration-none" href="comoAdoptar.html">¿Cómo
                                adoptar?</a></li>
                            <li><a className="text-light text-decoration-none" href="sobreNosotros.html">Sobre
                                Nosotros</a></li>
                            <li><a className="text-light text-decoration-none" href="accesoProtectora.html">Acceso</a>
                            </li>
                            <li><a className="text-light text-decoration-none" href="an">Compañeros disponibles</a></li>
                            <li><a className="text-light text-decoration-none" href="adoptados.html">Historias
                                Felices</a></li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contacto</h5>
                        <p><i className="fas fa-envelope me-2"></i>Correo: info@adoptafur.es</p>
                        <p><i className="fas fa-phone-alt me-2"></i>Teléfono: +34 612345645</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="me-3"><a href="https://www.instagram.com/belenjifit/" target="_blank"
                                                    className="text-decoration-none"><i
                                className="fab fa-instagram text-light"></i></a></li>
                            <li><a href="#" target="_blank" className="text-decoration-none"><i
                                className="fab fa-tiktok text-light"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr className="text-light w-100"/>
                <div className="row">
                    <div className="col text-center">
                        <p>&copy; 2024 AdoptaFur</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
