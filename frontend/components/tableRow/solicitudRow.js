import React from 'react';
import {Button, Image} from "react-bootstrap";

export const SolicitudRow = ({solicitud, mostrarAcciones}) => {
    const cancelarSolicitud = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/' + solicitud.id + '/cancelar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (response.ok) {
                alert('Solicitud enviada exitosamente');
                window.location.href = '/misSolicitudes';
            } else {
                alert('Error al enviar la solicitud');
            }
        } catch (error) {
            console.error(error);
        }

    };
    return (
        <tr className="text-center align-middle">
            <td>{solicitud.fecha}</td>
            <td style={{width: '72px', height: '72px'}}>
                <Image src={solicitud.mascota.foto}
                       alt={solicitud.mascota.nombre}
                       style={{width: '72px', height: '72px', objectFit: 'cover'}}
                       rounded/>
            </td>
            <td>{solicitud.mascota.nombre}</td>
            <td>{solicitud.estado}</td>
            <td>{solicitud.tipoHogar}</td>
            <td>{solicitud.alergias}</td>
            <td>{solicitud.familia}</td>
            {mostrarAcciones ? (
                <td>
                    <Button variant="success" onClick={cancelarSolicitud} className="mb-2">Cancelar</Button>
                    <Button variant="secondary" href={"/misSolicitudes/modificarSolicitud/" + solicitud.id}
                            className="mb-2">Modificar</Button>
                </td>
            ) : null}
        </tr>
    );
}


export default SolicitudRow;