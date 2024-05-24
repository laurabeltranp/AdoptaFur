"use client"
import React, {useEffect, useState} from 'react'
import {Table, Button, Container, Image, Row, Col} from 'react-bootstrap';
import MascotaTable from "@/components/table/mascotaTable";

export default function MisMascotas() {

    const [mascotasDisponibles, setMascotasDisponibles] = useState([]);
    const [mascotasBloqueadas, setMascotasBloqueadas] = useState([]);
    const [mascotasAdoptadas, setMascotasAdoptadas] = useState([]);

    useEffect(() => {

        const obteniendoMisMascotas = async () => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/misMascotas', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {

                    const data = await response.json();
                    setMascotasDisponibles(data.filter((mascota) => mascota.estado === 'DISPONIBLE'));
                    setMascotasBloqueadas(data.filter((mascota) => mascota.estado === 'BLOQUEADA'));
                    setMascotasAdoptadas(data.filter((mascota) => mascota.estado === 'ADOPTADA'));
                }
            } catch (error) {
            }
        };
        obteniendoMisMascotas();
    }, []);

    return (
        <div className="content">
            <Container>
                <h1 className="my-4 text-center">Mascotas de la protectora {localStorage.getItem('nombre')}</h1>
                <div className="">
                    <Row className="my-2">
                        <Col md={3}>
                            <Button href="/misMascotas/altaMascota" variant="primary">Alta Mascota</Button>
                        </Col>
                        <Col>
                            <h2>Mascotas buscando una familia</h2>
                        </Col>
                    </Row>
                    <MascotaTable mascotas={mascotasDisponibles}></MascotaTable>
                    <h2 className="text-center">Mascotas preparandose para buscar una familia</h2>
                    <MascotaTable mascotas={mascotasBloqueadas}></MascotaTable>
                    <h2 className="text-center">Mascotas que han encontrado una familia</h2>
                    <MascotaTable mascotas={mascotasAdoptadas}></MascotaTable>
                </div>
            </Container>
        </div>
    )
}
