"use client"
import React from "react";
import "./contacto.css";
import FormularioContacto from "@/components/formularioContacto/formularioContacto";

export default function Contacto() {
    return (
        <main>
            <section className="start-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <h2 className="mb-4">Contacto</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <h2 className="centered-text">¿Quiénes somos?</h2>
                                <p>
                                    Somos una organización dedicada a la búsqueda de personas que
                                    estén interesadas en adoptar animales desamparados y a
                                    conectarlas con protectoras que ofrezcan esos animales.
                                </p>
                            </div>
                            <h2 className="centered-text">¿Dónde encontrarnos?</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221.050374385271!2d-3.810756630200114!3d40.451417487498176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229053a97108d%3A0x1e7f6031754f0ce!2sGrupo%20Proeduca!5e0!3m2!1ses!2ses!4v1715857430351!5m2!1ses!2ses"
                                width="600"
                                height="324"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="col-md-6">
                            <FormularioContacto />
                        </div>
                    </div>
                </div>
            </section>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop
                            offset="0%"
                            style={{stopColor: "rgb(88,213,92)", stopOpacity: "0"}}
                        />
                        <stop
                            offset="100%"
                            style={{stopColor: "rgb(88,213,92)", stopOpacity: "1"}}
                        />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop
                            offset="0%"
                            style={{stopColor: "rgb(255,255,255)", stopOpacity: "0"}}
                        />
                        <stop
                            offset="100%"
                            style={{stopColor: "rgb(177,215,182)", stopOpacity: "1"}}
                        />
                    </linearGradient>
                </defs>
                <path
                    className="elementor-shape-fill"
                    opacity="0.33"
                    d="M527,67.3c203.9,88.3,263.1-34,320.3,0c78.8-49.3,144.8-108.7,144.8-108.7V1000H0V451.3 c0,0,62.1-26.1,94.9-29.3c32.8-3.3,62.8,12.3,75.8,22.1c19.5,9.5,80.2,50.4,130.6,54.4c51.5,4.1,244-49.2,263.4-57.5 C945.5,409.5,1000,336,1000,336H0c0,0,9.9,40.9,83.6,48.1C176.9,393.9,211.3,67.3,527,67.3z"
                    fill="url(#grad1)"
                ></path>
                <path
                    className="elementor-shape-fill"
                    opacity="0.66"
                    d="M266,67.3c45.5,0,77.2-23.2,129.1-39.1c28.6-8.7,150.3-10.1,254,39.1 s91.7-34.4,149.2,0C884.3,118.3,1000,39.8,1000,39.8V1000H0V963.5c0,0,28.2-18.5,92.1-18.5C189.8,945.9,224.3,67.3,266,67.3z"
                    fill="url(#grad2)"
                ></path>
            </svg>
        </main>


    );
}