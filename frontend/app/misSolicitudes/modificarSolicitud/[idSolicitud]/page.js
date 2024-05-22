"use client"
import React, {useEffect, useState} from 'react'
import FormularioSolicitudModificar from "@/components/formularioSolicitud/formularioSolicitudModificar";
import InformacionCard from "@/components/informaciónCard/informacionCard";

export default function DetalleSolicitud({params}) {
    const [solicitud, setSolicitud] = useState({
        id: params.idSolicitud,
        usuario: '',
        mascota: {},
        fecha: '',
        estado: '',
        tipoHogar: '',
        alergias: '',
        familia: '',
    });
    useEffect(() => {
        const obteniendoSolicitud = async (id) => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/' + id, {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setSolicitud(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        obteniendoSolicitud(params.idSolicitud);
    }, [params.idSolicitud]);

    return (

        <main className='container'>
            <h2>Modificando solicitud de adopción de {solicitud.mascota.nombre}</h2>
                    <InformacionCard mascota={solicitud.mascota}></InformacionCard>
                    <FormularioSolicitudModificar solicitud={solicitud}></FormularioSolicitudModificar>
        </main>
    )
}