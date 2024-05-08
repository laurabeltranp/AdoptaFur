import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Profile = ({authToken}) => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');

    useEffect(() => {
        const obteniendoPerfil = async () => {
            try {

                const response = await fetch('http://' + window.location.hostname + ':8081/usuario/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setEmail(data.username || '');
                    setNombre(data.nombre || '');
                    setApellidos(data.apellidos || '');
                    setEmail(data.email || '');
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
                body: JSON.stringify({username: email, nombre, apellidos})
            });
            if (response.ok) {
                // Manejar éxito
            }
        } catch (error) {
            // Manejar errores de red
        }
    };

    return (

        <main className='container'>
            <div className='bg-light p-5 rounded'>
                <h2>Editar Perfil de {email}</h2>
                <Form onSubmit={modificandoPerfil}>
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
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" required placeholder="Email" value={email}
                                      onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Button type="submit">Guardar</Button>
                </Form>
            </div>
        </main>

    );
};

export default Profile;