import React, {Component} from 'react';
import {Button, Image, Table} from "react-bootstrap";
import MascotaRow from "@/components/mascotaRow/mascotaRow";

export const MascotaTable = ({mascotas}) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
            <tr className="text-center">
                <th>Foto</th>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Peso</th>
                <th>Provincia</th>
                <th>Solicitudes Recibidas</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {mascotas.map((mascota) => {
                return (
                        <MascotaRow key={mascota.id+mascota.nombre} mascota = {mascota}></MascotaRow>
                    )

            })}
            </tbody>
        </Table>
    );

}


export default MascotaTable;