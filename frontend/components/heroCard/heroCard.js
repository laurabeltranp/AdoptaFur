import React from 'react'
import Image from 'next/image'
import "/components/heroCard/heroCard.css"

export const HeroCard = ({mascota}) => {
    return (
            <div className="card h-100 tarjeta-background">
                <div className="card-img-container">
                <Image
                    src={mascota.foto}
                    width={300}
                    height={242}
                    alt={mascota.nombre}
                    className="card-img-top img-fluid"
                />
                </div>
                <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href={"/buscadorMascotas/verDetalle/" + mascota.idMascota} style={{ 'textDecoration': 'none' }}>{mascota.nombre}</a></h5>
                </div>
            </div>
    )
}

export default HeroCard;
