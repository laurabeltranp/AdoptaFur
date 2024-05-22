"use client"
import React, {useEffect, useState} from 'react'
import {Table, Button, Container, Image} from 'react-bootstrap';
import MascotaTable from "@/components/table/mascotaTable";

export default function MisMascotas() {

    const [mascotas, setMascotas] = useState([]);

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
                    setMascotas(data);
                }
            } catch (error) {
            }
        };
        obteniendoMisMascotas();
    }, []);

    return (
        <div className="content">
            <Container>
                <h1 className="my-4 text-center">Mis Mascotas.</h1>
                <div className="my-4 ">
                    <Button href="/misMascotas/altaMascota" variant="primary">Alta Mascota</Button>
                </div>
                <MascotaTable mascotas={mascotas}></MascotaTable>
            </Container>
        </div>
    )
}
