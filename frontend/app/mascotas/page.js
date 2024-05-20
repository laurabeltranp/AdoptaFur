import React from 'react'
import TarjetaMascota from "@/components/tarjetasMascotas/tarjetasMascotas";

export default function Mascotas() {
    return (
        <main className='container'>
            <div>
               AQUI MUESTRO TAS LAS MASCOTAS Y VAN LOS FILTROS PARA BUSCAR  LAS MASCOTAS POR HACER
            </div>
            <div>
                <TarjetaMascota></TarjetaMascota>
            </div>
        </main>
    )
}
