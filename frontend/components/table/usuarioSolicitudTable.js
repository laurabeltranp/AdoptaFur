import {Table} from "react-bootstrap";
import SolicitudRow from "@/components/tableRow/solicitudRow";
import React from "react";
import UsuarioSolicitudTable from "@/components/table/usuarioSolicitudTable";
import UsuarioSolicitudRow from "@/components/tableRow/usuarioSolicitudRow";

export const SolicitudTable = ({solicitudes, mostrarAcciones}) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
            <tr className="text-center">
                <th>Fecha de Solicitud</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Fecha de Nacimiento</th>
                <th>Provincia</th>
                <th>Descripción</th>
                <th>Tipo de Vivienda</th>
                <th>Alergias</th>
                <th>Personas Convivientes</th>
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
                        <UsuarioSolicitudRow key={solicitud.id} solicitud={solicitud} mostrarAcciones={mostrarAcciones}></UsuarioSolicitudRow>
                    )

                })}
            </tbody>
        </Table>
    );

}
export default SolicitudTable;