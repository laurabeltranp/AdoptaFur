import React, {Component} from 'react';
import {Button, Image, Table} from "react-bootstrap";

export const MascotaRow = ({mascota, mostrarAcciones}) => {
    return (
                    <tr className="text-center align-middle">
                        <td style={{width: '72px', height: '72px'}}>
                            <Image src={mascota.foto}
                                   alt={mascota.nombre}
                                   style={{width: '72px', height: '72px', objectFit: 'cover'}}
                                   rounded/>
                        </td>
                        <td>{mascota.nombre}</td>
                        <td>{mascota.razaDto.especie}</td>
                        <td>{mascota.razaDto.nombre}</td>
                        <td>{mascota.peso} kg</td>
                        <td>{mascota.provincia}</td>
                        <td>{mascota.solicitudes}</td>
                        {mostrarAcciones ? (
                            <td>
                                <Button variant="success" href={"/misMascotas/modificarMascota/"+mascota.idMascota} className="mb-2">Modificar</Button>{' '}
                                <Button variant="secondary" href={"/misMascotas/gestionarSolicitudes/"+mascota.idMascota} className="mb-2">Gestionar Solicitudes</Button>
                            </td>
                        ) : null}
                    </tr>
    );

}


export default MascotaRow;