import React from 'react'
import { Card } from '../card/card'

export const Cardlist = ({mascotas}) => {

    return (
        <div className="container tarjetas-containerseccion1">
            {mascotas.map((mascota) => {
                return(
                    <div className="row mt-5">
                    <Card key={mascota.idMascota} mascota={mascota} />
                    </div>)
            })}
        </div>
    );
}
export default Cardlist;
