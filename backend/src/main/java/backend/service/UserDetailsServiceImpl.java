package backend.service;

import backend.entity.Usuario;
import backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Implementación del servicio de UserDetails para cargar los detalles del usuario.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UsuarioRepository usuarioRepository;

    /**
     * Carga los detalles del usuario por su nombre de usuario (email).
     *
     * @param email el email del usuario
     * @return los detalles del usuario
     * @throws UsernameNotFoundException si el usuario no se encuentra
     */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findById(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

        return UsuarioDetailsImpl.build(usuario);
    }
}
