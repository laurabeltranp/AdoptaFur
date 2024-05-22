import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import "./formularioSolicitud.css";
import {FormGroup} from "react-bootstrap";
import Guard from "@/components/guard/guard";

export const FormularioSolicitudModificar = (solicitud) => {
    const [solicitudModificada, setSolicitudModificada] = useState({
        id: solicitud.idSolicitud,
        tipoHogar: solicitud.tipoHogar,
        alergias: solicitud.alergias,
        familia: solicitud.familia,
    });

    useEffect(() => {
        if (solicitud) {
            setSolicitudModificada(prevSolicitudModificada => ({
                ...prevSolicitudModificada,
                tipoHogar: solicitud.tipoHogar,
            }));
        }
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSolicitudModificada(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/modificar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    ...solicitud,
                })
            });
            if (response.ok) {
                alert('Solicitud modificada exitosamente');
            } else {
                alert('Error al modificar la solicitud');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="formulario-solicitud m-4">
            <Form.Group controlId="tipoHogar">
                <Form.Label>Tipo de Hogar:</Form.Label>
                <Form.Control
                    type="text"
                    name="tipoHogar"
                    value={solicitudModificada.tipoHogar}
                    onChange={handleChange}
                    className="solicitud-input"
                />
            </Form.Group>
            <Form.Group controlId="alergias">
                <Form.Label>Alergias:</Form.Label>
                <Form.Control
                    type="text"
                    name="alergias"
                    value={solicitudModificada.alergias}
                    onChange={handleChange}
                    className="solicitud-input"
                />
            </Form.Group>
            <Form.Group controlId="familia">
                <Form.Label>Familia:</Form.Label>
                <Form.Control
                    type="text"
                    name="familia"
                    value={solicitudModificada.familia}
                    onChange={handleChange}
                    className="solicitud-input"
                />
            </Form.Group>
            <FormGroup className="text-center">
                <Guard requiredRoles={["Usuario", "Protectora"]}>
                    <Button
                        variant="success"
                        type="submit"
                        className="m-2 solicitud-boton"
                    >
                        Modificar Solicitud
                    </Button>
                </Guard>
            </FormGroup>
        </Form>
    );
}

export default FormularioSolicitudModificar;