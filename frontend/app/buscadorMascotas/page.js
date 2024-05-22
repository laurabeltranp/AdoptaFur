import React from 'react'
import TarjetaMascota from "@/components/mascotasCard/mascotasCard";
import FiltrosMascotas from "@/components/filtrosMascotas/filtrosMascotas";

export default function Mascotas() {
    return (
        <main className='container'>
            <div>
                <FiltrosMascotas></FiltrosMascotas>
            </div>
            <div>
                <TarjetaMascota></TarjetaMascota>
            </div>
        </main>
    )
}
