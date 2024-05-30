package backend.service;

import backend.entity.Usuario;
import backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Servicio para operaciones relacionadas con los usuarios.
 */
@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    /**
     * Verifica si existe un usuario con el correo especificado.
     *
     * @param email el correo del usuario a verificar
     * @return true si existe un usuario con el correo especificado, false de lo contrario
     */
    public boolean existeUsuarioConCorreo(String email) {
        return usuarioRepository.existsById(email);
    }

    /**
     * Guarda un nuevo usuario en el repositorio.
     *
     * @param usuario el usuario a guardar
     */
    public void alta(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    /**
     * Busca un usuario por su correo electrónico.
     *
     * @param email el correo del usuario a buscar
     * @return un Optional que puede contener el usuario encontrado, si existe
     */
    public Optional<Usuario> buscarUno(String email) {
        return usuarioRepository.findById(email);
    }

    /**
     * Modifica un usuario existente en el repositorio.
     *
     * @param usuario el usuario a modificar
     */
    public void modificar(Usuario usuario) {
        usuarioRepository.save(usuario);
    }
}
