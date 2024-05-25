import React from 'react';
import {Table} from "react-bootstrap";
import MascotaRow from "@/components/tableRow/mascotaRow";

export const MascotaTable = ({mascotas, mostrarAcciones}) => {
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
                {mostrarAcciones ? (
                    <>
                        <th>Acciones</th>
                    </>
                ) : null}
            </tr>
            </thead>
            <tbody>
            {mascotas.map((mascota) => {
                return (
                    <MascotaRow key={mascota.id + mascota.nombre} mascota={mascota}
                                mostrarAcciones={mostrarAcciones}></MascotaRow>
                )

            })}
            </tbody>
        </Table>
    );

}


export default MascotaTable;