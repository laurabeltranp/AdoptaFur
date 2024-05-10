'use client'
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Acceso = () => {
    useEffect(() => {
        const footer = document.querySelector('.footer');
        const contentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;

        if (contentHeight < windowHeight) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.left = '0';
            footer.style.width = '100%';
        }
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://' + window.location.hostname + ':8081/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const { accessToken, email, nombre, rolDto, tokenExpiration } = await response.json();
            localStorage.setItem('token', accessToken);
            localStorage.setItem('email', email);
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('perfil', rolDto.nombre);
            localStorage.setItem('tokenExpiration', tokenExpiration);
            window.location.href = '/';
        }
    };

    return (

        <div className='acceso'>
            <main className='container col-md-4'>
                <div className='bg-light p-5 m-5 rounded'>
                    <h2>Iniciar Sesión</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="correo@correo.es" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">Entrar</Button>
                    </Form>
                </div>
            </main>
        </div>
    );
};

export default Acceso;
