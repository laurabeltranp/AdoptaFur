import React from 'react';
import {Button} from "react-bootstrap";

export const SolicitudRow = ({solicitud, mostrarAcciones}) => {
    const rechazarSolicitud = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/' + solicitud.id + '/denegar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (response.ok) {
                alert('Solicitud rechazada exitosamente');
                window.location.href = '/misMascotas';
            } else {
                alert('Error al rechazar la solicitud');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const aceptarSolicitud = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/' + solicitud.id + '/aceptar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (response.ok) {
                alert('Solicitud aceptada exitosamente');
                window.location.href = '/misMascotas';
            } else {
                alert('Error al aceptar la solicitud');
            }
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <tr className="text-center align-middle">
            <td>{solicitud.fecha}</td>
            <td>{solicitud.usuario.nombre}</td>
            <td>{solicitud.usuario.telefono}</td>
            <td>{solicitud.usuario.cumpleanio}</td>
            <td>{solicitud.usuario.provincia}</td>
            <td>{solicitud.usuario.description}</td>
            <td>{solicitud.tipoHogar}</td>
            <td>{solicitud.alergias}</td>
            <td>{solicitud.familia}</td>
            {mostrarAcciones ? (
                <td>
                    <Button variant="success" onClick={aceptarSolicitud} className="mb-2">Aceptar</Button>
                    <Button variant="primary" onClick={rechazarSolicitud} className="mb-2">Rechazar</Button>
                </td>
            ) : null}
        </tr>
    );
}


export default SolicitudRow;