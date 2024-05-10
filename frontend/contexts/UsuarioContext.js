'use client'
import {createContext, useContext, useEffect, useState} from "react";

export const UsuarioContext = createContext();


export const useUsuario = () => {
    return useContext(UsuarioContext);
}

export const UsuarioProvider = ({children}) => {
    const [perfil, setPerfil] = useState('Anonymous');
    useEffect(() => {
        let localPerfil = localStorage.getItem('perfil');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const now = Date.now() / 1000;

        if (!localPerfil || !tokenExpiration || tokenExpiration < now) {
            localPerfil = 'Anonymous';
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('tokenExpiration');
        }
        localStorage.setItem('perfil', localPerfil);

        setPerfil(localPerfil);
    }, [])

    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);

    return <UsuarioContext.Provider value={{
        perfil,
    }}>
        {mounted ? (<>
            {children}
        </>) : null}
    </UsuarioContext.Provider>
}
