import React from 'react'
import Image from 'next/image'

export const Card = () => {
    return (
        <div className="col-md-3">
            <div className="card h-100 tarjeta-background">
                <Image
                    src="/perrodestacado1.jpeg"
                    width={300}
                    height={242}
                    alt="Compañero disponible"
                    className="card-img-top img-fluid"
                />
                <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href="descripcion_perro.html" style={{ 'textDecoration': 'none' }}>Laika</a></h5>
                </div>
            </div>
        </div>
    )
}
