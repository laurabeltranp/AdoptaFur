"use client"
import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import InformacionCard from "@/components/informaciónCard/informacionCard";
import UsuarioSolicitudTable from "@/components/table/usuarioSolicitudTable";


export default function GestionarSolicitudes({params}) {
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

    const [solicitudesPendientes, setSolicitudesPendientes] = useState([]);
    const [solicitudesAceptadas, setSolicitudesAceptadas] = useState([]);
    const [solicitudesDescartadas, setSolicitudesDescartadas] = useState([]);

    useEffect(() => {
        const obteniendoUnaMascota = async (idMascota) => {
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
        obteniendoUnaMascota(params.idMascota);
    }, [params.idMascota]);

    useEffect(() => {
        if (!mascota.idMascota) return;

        const obteniendoSolicitudes = async () => {
            try {
                const response = await fetch(
                    `http://${window.location.hostname}:8081/solicitud/porMascota/${mascota.idMascota}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setSolicitudesPendientes(data.filter((solicitud) => solicitud.estado === 'PENDIENTE'));
                    setSolicitudesAceptadas(data.filter((solicitud) => solicitud.estado === 'ACEPTADA'));
                    setSolicitudesDescartadas(data.filter((solicitud) => solicitud.estado === 'CANCELADA' || solicitud.estado === 'RECHAZADA'));
                }
            } catch (error) {
                console.error(error);
            }
        };
        obteniendoSolicitudes();
    }, [mascota.idMascota]);

    return (
        <Container className="start-spacing">
            <InformacionCard mascota={mascota}></InformacionCard>
            <h2 className="my-4 text-center">Solicitudes por gestionar de {mascota.nombre}.</h2>
            <UsuarioSolicitudTable solicitudes={solicitudesPendientes} mostrarAcciones={true}></UsuarioSolicitudTable>
            <h2 className="my-4 text-center">Solicitud aceptada de {mascota.nombre}.</h2>
            <UsuarioSolicitudTable solicitudes={solicitudesAceptadas} mostrarAcciones={false}></UsuarioSolicitudTable>
            <h2 className="my-4 text-center">Solicitudes antigüas de {mascota.nombre}.</h2>
            <UsuarioSolicitudTable solicitudes={solicitudesDescartadas} mostrarAcciones={false}></UsuarioSolicitudTable>
        </Container>
    );
}
