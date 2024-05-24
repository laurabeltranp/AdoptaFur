"use client"

import React, {useState} from 'react'
import TarjetaMascota from "@/components/mascotasCard/mascotasCard";
import FiltrosMascotas from "@/components/filtrosMascotas/filtrosMascotas";

export default function Mascotas() {
    const [mascotas, setMascotas] = useState([]);
    return (
        <main className='container start-spacing'>
            <div>
                <FiltrosMascotas onFilter={(mascotas) => setMascotas(mascotas)}></FiltrosMascotas>
            </div>
            <div>
                <TarjetaMascota mascotas={mascotas}></TarjetaMascota>
            </div>
        </main>
    )
}
