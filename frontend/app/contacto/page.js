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
        </main>
    );
}