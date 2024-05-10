import React from "react";
import {useUsuario} from "@/contexts/UsuarioContext";

const Guard = ({requiredRoles, children}) => {
    const {perfil} = useUsuario()
    const hasRole = (roles) => {
        let found = roles.find(s => perfil === s);
        return found !== undefined;
    }

    if (hasRole(requiredRoles)) {
        return (<>
            {children}
        </>);
    } else {
        return <></>;
    }

};

export default Guard;
