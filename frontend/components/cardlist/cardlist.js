import React from 'react'
import { Card } from '../card/card'

export const cardlist = () => {
    return (
        <div className="container tarjetas-containerseccion1">
            <div className="row mt-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="row mt-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
        </div>
    )
}
