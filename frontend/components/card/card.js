import React from 'react'
import Image from 'next/image'

export const Card = ({mascota}) => {
    return (
        <div className="col-md-3">
            <div className="card h-100 tarjeta-background">
                <Image
                    src={mascota.foto}
                    width={300}
                    height={242}
                    alt={mascota.nombre}
                    className="card-img-top img-fluid"
                />
                <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href="descripcion_perro.html" style={{ 'textDecoration': 'none' }}>{mascota.nombre}</a></h5>
                </div>
            </div>
        </div>
    )
}

export default Card;
