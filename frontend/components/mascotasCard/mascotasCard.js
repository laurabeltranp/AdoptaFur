"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/esm/Button";

function TarjetasMascota() {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {


        const obteniendoMascotas = async () => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {

                    const data = await response.json();
                    setMascotas(data);
                }
            } catch (error) {
            }
        };
        obteniendoMascotas();
    }, []);
    return (

        <Container>
            <Row>
                {mascotas.map((mascota) => {
                    return (
                        <Col  key={mascota.nombre}xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card className="m-2" key={mascota.nombre} style={{width: '18rem'}}>
                                <Card.Img variant="top" style={{height: '224px'}} src={mascota.foto}/>
                                <Card.Body>
                                    <Card.Title>{mascota.nombre}</Card.Title>
                                    <Card.Text>
                                        {mascota.description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Soy un {mascota.razaDto.especie} de
                                        raza {mascota.razaDto.nombre}</ListGroup.Item>
                                    <ListGroup.Item>Vivo en {mascota.provincia} y
                                        peso {mascota.peso} Kg</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button href={"/mascotas/verDetalle/"+mascota.idMascota}>Solicitar Adopción</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )

                })}
            </Row>
        </Container>
    );
}

export default TarjetasMascota;