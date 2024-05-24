"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import './mascotasCard.css';

function TarjetasMascota({mascotas}) {
    return (

        <Container>
            <Row>
                {mascotas.map((mascota) => (
                    <Col key={mascota.nombre} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="m-2 tarjeta-background">
                            <Card.Img variant="top" className="card-img-top" src={mascota.foto} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="centered-text">{mascota.nombre}</Card.Title>
                                <Card.Text className="italic-text centered-text">
                                    {mascota.razaDto.nombre}
                                </Card.Text>
                                <ListGroup className="flex-grow-1">
                                    <ListGroup.Item className="list-item">
                                        <Row>
                                            <Col>
                                                Peso: {mascota.peso} Kg
                                            </Col>
                                            <Col className="right-text">
                                                ({mascota.provincia})
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="list-item truncate-description">
                                        {mascota.description}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button className="mt-auto" href={"/buscadorMascotas/verDetalle/" + mascota.idMascota}>
                                    Solicitar Adopción
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TarjetasMascota;