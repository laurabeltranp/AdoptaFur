import React from 'react'
import Button from "react-bootstrap/esm/Button";

export default function Mascotas() {
    return (
        <main className='container'>
            <div>
               <Button href="/misMascotas/altaMascota" variant="primary">Alta Mascota</Button>
            </div>
            <div>
                aqui la protectora y los usuarios ven sus mascotas disponibles
            </div>
            <div>
                aqui la protectora  ven las solicitudes de cada mascota
            </div>
        </main>
    )
}
