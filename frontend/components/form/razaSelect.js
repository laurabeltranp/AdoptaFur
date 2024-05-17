import React, {useEffect, useState} from 'react'
import { HeroCard } from '@/components/heroCard/heroCard'
import {Form} from "react-bootstrap";

export const RazaSelect = ({especie, onChange}) => {
    const [razas, setRazas] = useState([
        {idRaza: 1, nombre: 'Mestizo'},

    ]);
    useEffect(() => {
        const obteniendoRazas = async () => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/raza/' + especie, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setRazas(data);
                }
            } catch (error) {
            }
        };

        obteniendoRazas();
    }, [especie]);

    return (
            <Form.Select
                defaultValue=""
                onChange={onChange}
                required>
                <option key='0' disabled value="">Selecciona una raza</option>
                {razas.map((raza) => {
                    return <option  key={raza.idRaza} value={raza.idRaza}>{raza.nombre}</option>
                })}
            </Form.Select>
    );
}
export default RazaSelect;
