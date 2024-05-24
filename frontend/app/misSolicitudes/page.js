"use client"
import React, {useEffect, useState} from 'react'
import {Container} from "react-bootstrap";
import SolicitudTable from "@/components/table/solicitudTable";

export default function MisSolicitudes () {
  const [solicitudesPendientes, setSolicitudesPendientes] = useState([]);
  const [solicitudesAceptadas, setSolicitudesAceptadas] = useState([]);
  const [solicitudesDescartadas, setSolicitudesDescartadas] = useState([]);

  useEffect(() => {

    const obteniendoMisSolicitudes = async () => {
      try {
        const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
        });
        if (response.ok) {

          const data = await response.json();
          setSolicitudesPendientes(data.filter((solicitud) => solicitud.estado === 'PENDIENTE'));
          setSolicitudesAceptadas(data.filter((solicitud) => solicitud.estado === 'ACEPTADA'));
          setSolicitudesDescartadas(data.filter((solicitud) => solicitud.estado === 'CANCELADA' || solicitud.estado === 'RECHAZADA'));

        }
      } catch (error) {
      }
    };
    obteniendoMisSolicitudes();
  }, []);

  return (
      <div className="content">
        <Container>
          <h2 className="my-4 text-center">Mis solicitudes de adopción pendientes.</h2>
          <SolicitudTable solicitudes={solicitudesPendientes}  mostrarAcciones={true}></SolicitudTable>
          <h2 className="my-4 text-center">Mis solicitudes de adopción aceptadas.</h2>
          <SolicitudTable solicitudes={solicitudesAceptadas}  mostrarAcciones={false}></SolicitudTable>
          <h2 className="my-4 text-center">Mis solicitudes de adopción antigüas.</h2>
          <SolicitudTable solicitudes={solicitudesDescartadas}  mostrarAcciones={false}></SolicitudTable>
        </Container>
      </div>
  )
}
