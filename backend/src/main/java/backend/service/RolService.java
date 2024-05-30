package backend.service;

import backend.entity.Rol;
import backend.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Servicio para gestionar las operaciones relacionadas con los roles de usuario.
 */
@Service
public class RolService {
    @Autowired
    RolRepository rolRepository;

    /**
     * Muestra un rol específico por su ID.
     *
     * @param idRol el ID del rol
     * @return un Optional que contiene el rol si se encuentra
     */
    public Optional<Rol> mostrarUno(Integer idRol) {
        return rolRepository.findById(idRol);
    }
}
