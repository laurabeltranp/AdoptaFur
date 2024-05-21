
import Button from "react-bootstrap/Button";
import React from 'react';


 export const LogOutButton = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('perfil');
        window.location.href = '/';
    };


    return <Button onClick={handleLogout}>Cerrar sesión</Button>;

};

export default LogOutButton;