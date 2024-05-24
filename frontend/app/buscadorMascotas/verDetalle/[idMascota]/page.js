"use client"
import React, {useEffect, useState} from 'react'
import InformacionCard from "@/components/informaciónCard/informacionCard";
import FormularioSolicitudAlta from "@/components/formularioSolicitud/formularioSolicitudAlta";

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

        <main className='container start-spacing'>
            <h2 className="mb-4 solicitud-titulo text-center">Solicitar adopción de {mascota.nombre}</h2>
            <InformacionCard mascota={mascota}></InformacionCard>
            <FormularioSolicitudAlta id={mascota.idMascota}></FormularioSolicitudAlta>
        </main>
    )
}