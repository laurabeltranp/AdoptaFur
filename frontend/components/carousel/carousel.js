import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import './carousel.css';
import {useEffect, useState} from "react";

export const CustomCarrusel = () => {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const obteniendoMascotas = async () => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/mascotas/adoptadas', {
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
        <Carousel className="card2">
            {mascotas.map((mascota) => {
                return (
                    <Carousel.Item key={mascota.idMascota}>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-img-container" >
                                        <Image
                                            src={mascota.foto}
                                            width={300}
                                            height={242}
                                            alt="Compañero disponible"
                                            className="card-img-top img-fluid"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5>{mascota.nombre}</h5>
                                        <p className="card-text"> {mascota.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>)
            })}
        </Carousel>
    );
}

export default CustomCarrusel;