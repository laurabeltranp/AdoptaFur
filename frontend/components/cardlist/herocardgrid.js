import React from 'react'
import { HeroCard } from '@/components/heroCard/heroCard'
import {Col, Container, Row} from "react-bootstrap";

export const Herocardgrid = ({mascotas}) => {

    return (

    <Container>
        <Row>
            {mascotas.map((mascota, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <HeroCard mascota={mascota} />
                </Col>
            ))}
        </Row>
    </Container>
    );
}
export default Herocardgrid;
