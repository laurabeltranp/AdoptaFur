"use client"
import Form from "react-bootstrap/Form";
import {Col, FormGroup, Row} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import Button from "react-bootstrap/esm/Button";
import './filtrosMascotas.css'

const FiltrosMascotas = ({ onFilter }) => {
    const [especie, setEspecie] = useState('');
    const [provincia, setProvincia] = useState('');
    const [tamano, setTamano] = useState('');
    const obteniendoMascotas = useCallback(async () => {
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/' + "?especie=" + especie + "&provincia=" + provincia + "&peso=" + tamano, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (response.ok) {
                const data = await response.json();
                onFilter(data);
            }
        } catch (error) {
            console.error(error);
        }
    }, [especie, provincia, tamano, onFilter]);

    useEffect(() => {
        obteniendoMascotas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleEspecieChange = (e) => {
        setEspecie(e.target.value);
    };

    const handleProvinciaChange = (e) => {
        setProvincia(e.target.value);
    };

    const handleTamanoChange = (e) => {
        setTamano(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        obteniendoMascotas();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3 mb-3 text-center">
                <Col>
                    <Form.Group>
                    <Form.Label className="custom-label">Especie</Form.Label>
                    <div>
                    <Form.Check
                        inline
                        type="radio"
                        label="Todos"
                        name="especie"
                        value={""}
                        defaultChecked={true}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Perro"
                        name="especie"
                        value={"PERRO"}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Gato"
                        name="especie"
                        value={"GATO"}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Pajaro"
                        name="especie"
                        value={"PAJARO"}
                        onChange={handleEspecieChange}
                    />
                    </div>
                        </Form.Group>
                </Col>
                <Col>
                    <FormGroup>
                    <Form.Label className="custom-label">Provincia</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce una provincia"
                        value={provincia}
                        onChange={handleProvinciaChange}
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Form.Label className="custom-label">Tamaño</Form.Label>
                    <Form.Control
                        as="select"
                        value={tamano}
                        onChange={handleTamanoChange}
                    >
                        <option value="">Selecciona un tamaño</option>
                        <option value="PEQUENA">Pequeño</option>
                        <option value="MEDIANA">Mediano</option>
                        <option value="GRANDE">Grande</option>
                    </Form.Control>
                    </FormGroup>
                </Col>
                <Col className="mt-4 " md={2}>
                    <Button className="d-flex align-items-end" variant="primary" type="submit">
                        Aplicar filtros
                    </Button>
                </Col>
            </Row>

        </Form>
    );
};

export default FiltrosMascotas;