import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React from "react";
import "./informacionCard.css";

export default function InformacionCard({mascota}) {
    return (
        <Card className="mascota-info m-4">
            <Row>
                <Col md={4}>
                    <Card.Img
                        variant="left"
                        src={mascota.foto}
                        alt={`Foto de ${mascota.nombre}`}
                        className="img-fluid"
                    />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title className="mascota-nombre">{mascota.nombre}</Card.Title>
                        <Card.Text><strong>Estado:</strong> {mascota.estado}</Card.Text>
                        <Card.Text><strong>Cumpleaños:</strong> {mascota.cumpleanio}</Card.Text>
                        <Card.Text><strong>Peso:</strong> {mascota.peso} kg</Card.Text>
                        <Card.Text><strong>Provincia:</strong> {mascota.provincia}</Card.Text>
                        <Row>
                            <Col>
                                <h5 className="mascota-subtitulo">Raza</h5>
                                <Card.Text><strong>Nombre:</strong> {mascota.razaDto?.nombre}</Card.Text>
                                <Card.Text><strong>Especie:</strong> {mascota.razaDto?.especie}</Card.Text>
                            </Col>
                            <Col>
                                <h5 className="mascota-subtitulo">Descripción</h5>
                                <Card.Text>{mascota.description}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    )
}
