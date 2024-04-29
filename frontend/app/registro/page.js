'use client'
import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cumpleanio, setCumpleanio] = useState('');
    const [provincia, setProvincia] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [idRol, setIdRol] = useState('');

    const enviandoFormulario = async (e) => {
        e.preventDefault();
        const response = await fetch('http://' + window.location.hostname + ':8081/usuario/alta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, nombre, apellidos, telefono, cumpleanio, provincia, descripcion, idRol })
        });
        if (response.ok) {
            window.location.href = '/login';
        }
    }

    return (
        <main className='container'>
            <div className='bg-light p-5 rounded m-5'>
                <h2>Crea una cuenta:</h2>
                <Form onSubmit={enviandoFormulario}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email:*</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password:*</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nombre:*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Apellidos o nombre social de la organización:*</Form.Label>
                        <Form.Control type="text" placeholder="Apellido1 apellido2" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Telefono:*</Form.Label>
                        <Form.Control type="phone" placeholder="956767676" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Fecha de nacimiento o constitución:*</Form.Label>
                        <Form.Control type="date" placeholder="19/01/1991" value={cumpleanio} onChange={(e) => setCumpleanio(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Provincia:*</Form.Label>
                        <Form.Control type="text" placeholder="Málaga" value={provincia} onChange={(e) => setProvincia(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Eres un usuario  o una organización dedicada a la protección de animales?:*</Form.Label>
                        <Form.Check
                            label="Usuario"
                            name="idRol"
                            type="radio"
                            id="1"
                            value={'1'}
                            onChange={(e) => setIdRol(e.target.value)} required
                        />
                        <Form.Check
                            name="idRol"
                            label="Protectora"
                            type="radio"
                            id="2"
                            value={'2'}
                            onChange={(e) => setIdRol(e.target.value)} required
                        />
                    </Form.Group>
                    <Button type="submit">Registrarse</Button>
                </Form>
            </div>
        </main>
    )
}
export default Registro;