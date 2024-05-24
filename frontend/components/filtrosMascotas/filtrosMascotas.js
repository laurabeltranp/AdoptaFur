"use client"
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/esm/Button";

const provincias = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona',
    'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca',
    'Girona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Illes Balears', 'Jaén',
    'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia',
    'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia',
    'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
];

const FiltrosMascotas = ({ onFilter }) => {
    const [especie, setEspecie] = useState({
        perro: false,
        gato: false,
        otro: false
    });
    const [provincia, setProvincia] = useState('');
    const [tamaño, setTamaño] = useState('');

    const handleEspecieChange = (e) => {
        setEspecie({
            ...especie,
            [e.target.name]: e.target.checked
        });
    };

    const handleProvinciaChange = (e) => {
        setProvincia(e.target.value);
    };

    const handleTamañoChange = (e) => {
        setTamaño(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ especie, provincia, tamaño });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Especie</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Perro"
                        name="perro"
                        checked={especie.perro}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Gato"
                        name="gato"
                        checked={especie.gato}
                        onChange={handleEspecieChange}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Otro"
                        name="otro"
                        checked={especie.otro}
                        onChange={handleEspecieChange}
                    />
                </Col>
                <Col>
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                        as="select"
                        value={provincia}
                        onChange={handleProvinciaChange}
                    >
                        <option value="">Selecciona una provincia</option>
                        {provincias.map((prov, index) => (
                            <option key={index} value={prov}>{prov}</option>
                        ))}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Tamaño</Form.Label>
                    <Form.Control
                        as="select"
                        value={tamaño}
                        onChange={handleTamañoChange}
                    >
                        <option value="">Selecciona un tamaño</option>
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </Form.Control>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Aplicar filtros
            </Button>
        </Form>
    );
};

export default FiltrosMascotas;