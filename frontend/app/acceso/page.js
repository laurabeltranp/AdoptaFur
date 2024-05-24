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
        <main>
        <section>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                            offset="0%"
                            style={{ stopColor: "rgb(88,213,92)", stopOpacity: 0 }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: "rgb(88,213,92)", stopOpacity: 1 }}
                        />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                            offset="0%"
                            style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0 }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: "rgb(177,215,182)", stopOpacity: 1 }}
                        />
                    </linearGradient>
                </defs>
                <path
                    className="elementor-shape-fill"
                    opacity="0.33"
                    d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
                    fill="url(#grad1)"
                ></path>
                <path
                    className="elementor-shape-fill"
                    opacity="0.66"
                    d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
                    fill="url(#grad2)"
                ></path>
            </svg>
            <div className='acceso container col-md-4'>
                    <div className='bg-light p-5 m-5 rounded' style={{background: 'linear-gradient(to bottom right, #A9D3AF, #ffffff)'}}>
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
                            <div className="text-center">
                                <Button type="submit">Entrar</Button>
                            </div>
                        </Form>
                    </div>
                </div>
        </section>
    </main>
    );
};

export default Acceso;
