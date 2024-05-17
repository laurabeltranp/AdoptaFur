import React from 'react'
import { HeroCard } from '@/components/heroCard/heroCard'

export const Cardlist = ({mascotas}) => {

    return (
        <div className="container tarjetas-containerseccion1">
            {mascotas.map((mascota) => {
                return(
                    <div className="row mt-5">
                    <HeroCard key={mascota.idMascota} mascota={mascota} />
                    </div>)
            })}
        </div>
    );
}
export default Cardlist;
