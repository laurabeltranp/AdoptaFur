"use client"
import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import InformacionCard from "@/components/informaciónCard/informacionCard";
import FormularioSolicitud from "@/components/formularioSolicitud/formularioSolicitud";

export default function DetalleMascota({params}) {
    const [mascota, setMascota] = useState({
        idMascota: '',
        nombre: '',
        estado: '',
        cumpleanio: '',
        peso: '',
        provincia: '',
        description: '',
        razaDto: {idRaza: '', nombre: '', especie: ''},
        protectora: '',
        foto: '',
        solicitudes: ''
    });

    useEffect(() => {
        const obteniendoMisMascota = async (idMascota) => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/verUna/' + idMascota, {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setMascota(data);

                }
            } catch (error) {
                console.error(error);
            }
        };
        obteniendoMisMascota(params.idMascota);
    }, [params.idMascota]);

    return (

        <main className='container'>
            <InformacionCard mascota={mascota}></InformacionCard>
            <FormularioSolicitud id={mascota.idMascota}></FormularioSolicitud>
        </main>
    )
}