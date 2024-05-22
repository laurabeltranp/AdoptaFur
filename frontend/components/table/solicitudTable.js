import React from 'react';
import {Table} from "react-bootstrap";
import SolicitudRow from "@/components/tableRow/solicitudRow";

export const SolicitudTable = ({solicitudes, mostrarAcciones}) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
            <tr className="text-center">
                <th>Fecha</th>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Vivienda</th>
                <th>Alergias</th>
                <th>Miembros de la familia</th>
                {mostrarAcciones ? (
                    <>
                        <th>Acciones</th>
                    </>
                ) : null}
            </tr>
            </thead>
            <tbody>
            {solicitudes
                .map((solicitud) => {
                    return (
                        <SolicitudRow key={solicitud.id} solicitud={solicitud} mostrarAcciones={mostrarAcciones}></SolicitudRow>
                    )

                })}
            </tbody>
        </Table>
    );

}
export default SolicitudTable;