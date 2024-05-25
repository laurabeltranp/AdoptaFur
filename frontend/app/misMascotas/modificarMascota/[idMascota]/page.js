"use client"
import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import RazaSelect from "@/components/selectInput/razaSelect";


export default function ModificarMascota({params}) {
    const [mascota, setMascota] = useState({
        idMascota: '',
        nombre: '',
        estado: '',
        cumpleanio: '',
        peso: '',
        provincia: '',
        description: '',
        razaDto: { idRaza: '', nombre: '', especie:'' },
        protectora: '',
        foto: '',
        solicitudes: ''
    });


    useEffect(() => {
        const obteniendoMisMascota = async (idMascota) => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/verUna/' + idMascota, {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setMascota(data);

                }
            } catch (error) {
                console.error(error);
            }
        };
        obteniendoMisMascota(params.idMascota);
    }, [params.idMascota]);

    const modificandoMascota = async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/modificar', {
            method: 'POST', headers: {
                'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(mascota)
        });
        if (response.ok) {
            window.location.href = '/misMascotas';
        } else {
            console.error('Error al registrar la mascota');
        }
    };

    const handleFotoChange = (event) => {
            const reader = new FileReader();
            reader.onload = async () => {
                setMascota((prevState) => ({
                    ...prevState, foto: reader.result
                }))
            }
            reader.readAsDataURL(event.target.files[0]);
    };
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <div className="p-4 mb-4 mt-4 rounded shadow-sm"
                         style={{background: 'linear-gradient(to bottom, transparent, #58d55cd5)'}}>
                        <h1 className="text-center my-4">Modificando perfil de {mascota.nombre}</h1>
                        <Form onSubmit={modificandoMascota}>
                            <Form.Group controlId="formNombre" className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={mascota.nombre}
                                    onChange={(e) => setMascota((prevState) => ({
                                        ...prevState, nombre: e.target.value
                                    }))}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEstado" className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select aria-label="estado" required value={mascota.estado} className="mb-3"
                                             onChange={(e) => setMascota((prevState) => ({
                                                 ...prevState,
                                                 estado: e.target.value
                                             }))}>
                                    <option
                                        value='DISPONIBLE'>DISPONIBLE
                                    </option>
                                    <option
                                        value='BLOQUEADA'>NO DISPONIBLE
                                    </option>
                                    <option
                                        value='ADOPTADA'>ADOPTADA
                                    </option>

                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formCumpleanio" className="mb-3">
                                <Form.Label>Fecha de Cumpleaños</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={mascota.cumpleanio}
                                    onChange={(e) => setMascota((prevState) => ({
                                        ...prevState, cumpleanio: e.target.value
                                    }))}
                                    className="form-control"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPeso" className="mb-3">
                                <Form.Label>Peso (kg)</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={mascota.peso}
                                    onChange={(e) => setMascota((prevState) => ({
                                        ...prevState, peso: e.target.value
                                    }))}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formProvincia" className="mb-3">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={mascota.provincia}
                                    onChange={(e) => setMascota((prevState) => ({
                                        ...prevState, provincia: e.target.value
                                    }))}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formDescription" className="mb-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={mascota.description}
                                    onChange={(e) => setMascota((prevState) => ({
                                        ...prevState, description: e.target.value
                                    }))}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEspecie" className="mb-3">
                                <Form.Label>Especie</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={mascota.razaDto?.especie}
                                    required
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group controlId="formRaza" className="mb-3">
                                <Form.Label>Raza</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={mascota.razaDto?.nombre}
                                    required
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group controlId="formFoto" className="mb-3">
                                <Form.Label>Foto</Form.Label>
                                <Row>
                                    <Col>
                                        <Image
                                            alt={mascota.nombre}
                                            className="mb-3"
                                            src={mascota.foto}
                                            style={{width: '72px', height: '72px'}}
                                            rounded
                                        />
                                    </Col>
                                    <Col xs={10}>
                                        <Form.Control
                                            type="file"
                                            filename={mascota.foto}
                                            onChange={handleFotoChange}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="text-center">
                                <Button  className="m-2" variant="primary" type="submit">
                                    Modificar Mascota
                                </Button>
                                <Button className="m-2" variant="secondary" href={"/misMascotas"}>
                                    Volver a Mascotas
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
