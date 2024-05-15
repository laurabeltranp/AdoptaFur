'use client'
import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Profile = ({authToken}) => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cumpleanio, setCumpleanio] = useState('');
    const [provincia, setProvincia] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        const obteniendoPerfil = async () => {
            try {
                const response = await fetch('http://' + window.location.hostname + ':8081/usuario/perfil', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {

                    const data = await response.json();
                    setEmail(data.email || '');
                    setNombre(data.nombre || '');
                    setApellidos(data.apellidos || '');
                    setTelefono(data.telefono || '');
                    setCumpleanio(data.cumpleanio || '');
                    setProvincia(data.provincia || '');
                    setDescripcion(data.descripcion || '');
                }
            } catch (error) {
            }
        };

        obteniendoPerfil();
    }, [authToken]);

    const modificandoPerfil = async () => {
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/usuario/modificar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({email, nombre, apellidos, telefono, cumpleanio, provincia, descripcion})
            });
        } catch (error) {
            // Manejar errores de red
        }
    };

    return (

        <main className='container'>
            <div className='bg-light p-5 m-5 rounded'>
                <h2>Editar Perfil de {nombre}</h2>
                <Form onSubmit={modificandoPerfil}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" required placeholder="Email" value={email}
                                      onChange={(e) => setEmail(e.target.value)} disabled
                                      readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" required placeholder="Nombre" value={nombre}
                                      onChange={(e) => setNombre(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control type="text" required placeholder="Apellidos" value={apellidos}
                                      onChange={(e) => setApellidos(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type="phone" required placeholder="Telefono" value={telefono}
                                      onChange={(e) => setTelefono(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha de nacimiento:</Form.Label>
                        <Form.Control type="date" required placeholder="dd/mm/aaaa" value={cumpleanio}
                                      onChange={(e) => setCumpleanio(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Provincia:</Form.Label>
                        <Form.Control type="text" required placeholder="Provincia" value={provincia}
                                      onChange={(e) => setProvincia(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control type="text" required placeholder="Teletrabajo desde casa, por lo que paso mucho tiempo en casa" value={descripcion}
                                      onChange={(e) => setDescripcion(e.target.value)}/>
                    </Form.Group>
                    <Button type="submit">Guardar</Button>
                </Form>
            </div>
        </main>

    );
};

export default Profile;