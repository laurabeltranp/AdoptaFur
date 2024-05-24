"use client"
import Form from "react-bootstrap/Form";
import {Col, FormGroup, Row} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import './filtrosMascotas.css'

const FiltrosMascotas = ({ onFilter }) => {
    const [especie, setEspecie] = useState({
        perro: false,
        gato: false,
        otro: false
    });
    const [provincia, setProvincia] = useState('');
    const [tamaño, setTamaño] = useState('');

    const handleEspecieChange = (e) => {
        setEspecie({
            ...especie,
            [e.target.name]: e.target.checked
        });
    };

    const handleProvinciaChange = (e) => {
        setProvincia(e.target.value);
    };

    const handleTamañoChange = (e) => {
        setTamaño(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ especie, provincia, tamaño });
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
                        type="checkbox"
                        label="Perro"
                        name="perro"
                        checked={especie.perro}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        inline
                        type="checkbox"
                        label="Gato"
                        name="gato"
                        checked={especie.gato}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        inline
                        type="checkbox"
                        label="Otro"
                        name="otro"
                        checked={especie.otro}
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
                        value={tamaño}
                        onChange={handleTamañoChange}
                    >
                        <option value="">Selecciona un tamaño</option>
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </Form.Control>
                    </FormGroup>
                </Col>
                <Col className="mt-4">
                    <Button className="d-flex align-items-end" variant="primary" type="submit">
                        Aplicar filtros
                    </Button>
                </Col>
            </Row>

        </Form>
    );
};

export default FiltrosMascotas;