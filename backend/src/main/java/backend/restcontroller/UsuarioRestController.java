package backend.restcontroller;

import backend.configuration.JwtUtils;
import backend.dto.*;
import backend.entity.Rol;
import backend.entity.Usuario;
import backend.service.RolService;
import backend.service.UsuarioDetailsImpl;
import backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

/**
 * Controlador REST para gestionar usuarios.
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuario")
public class UsuarioRestController {
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    RolService rolService;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;

    /**
     * Registra un nuevo usuario.
     *
     * @param usuarioDto el objeto DTO que contiene los detalles del usuario
     * @return una entidad de respuesta con un mensaje de éxito o error
     */
    @PostMapping("/alta")
    public ResponseEntity<?> registerUser(@RequestBody UsuarioDto usuarioDto) {

        if (usuarioService.existeUsuarioConCorreo(usuarioDto.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MensajeDto("Error: Email is already in use!"));
        }

        Usuario usuario = new Usuario();
        usuario.setEmail(usuarioDto.getEmail());
        usuario.setPassword(encoder.encode(usuarioDto.getPassword()));
        usuario.setNombre(usuarioDto.getNombre());
        usuario.setApellidos(usuarioDto.getApellidos());
        usuario.setTelefono(usuarioDto.getTelefono());
        usuario.setCumpleanio(usuarioDto.getCumpleanio());
        usuario.setProvincia(usuarioDto.getProvincia());
        usuario.setDescription(usuarioDto.getDescripcion());
        usuario.setEnabled(true);
        usuario.setRol(rolService.mostrarUno(usuarioDto.getIdRol()).get());

        usuarioService.alta(usuario);

        return ResponseEntity.ok(new MensajeDto("User registered successfully!"));
    }

    /**
     * Muestra el perfil de un usuario.
     *
     * @param authentication el objeto de autenticación del usuario
     * @return una entidad de respuesta con el perfil del usuario o un estado 404 si no se encuentra
     */
    @GetMapping("/perfil")
    public ResponseEntity<?> mostrarUn(Authentication authentication) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuario = usuarioService.buscarUno(userDetails.getUsername());
        if (usuario.isPresent()) {
            return ResponseEntity.ok(PerfilDto.from(usuario.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Modifica los detalles de un usuario.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param perfilDto el objeto DTO que contiene los nuevos detalles del perfil
     * @return una entidad de respuesta con un mensaje de éxito o un estado 404 si no se encuentra
     */
    @PutMapping("/modificar")
    public ResponseEntity<?> modificar(Authentication authentication, @RequestBody PerfilDto perfilDto) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuarioOptional = usuarioService.buscarUno(userDetails.getUsername());
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            usuario.setNombre(perfilDto.getNombre());
            usuario.setApellidos(perfilDto.getApellidos());
            usuario.setTelefono(perfilDto.getTelefono());
            usuario.setCumpleanio(perfilDto.getCumpleanio());
            usuario.setProvincia(perfilDto.getProvincia());
            usuario.setDescription(perfilDto.getDescripcion());
            usuarioService.modificar(usuario);
            return ResponseEntity.status(HttpStatus.OK).body("Usuario modificado");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Autentica el login de un usuario.
     *
     * @param peticionDeLoginDto el objeto DTO que contiene los detalles de login del usuario
     * @return una entidad de respuesta con el token JWT y los detalles del usuario autenticado
     */
    @PostMapping("/login")
    public ResponseEntity<?> autenticandoLogin(@RequestBody PeticionDeLoginDto peticionDeLoginDto) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(peticionDeLoginDto.getEmail(), peticionDeLoginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UsuarioDetailsImpl usuarioDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Rol rol = usuarioDetails.getRol();

        Date expirationDate = jwtUtils.getExpirationDateFromJwtToken(jwt);
        long expirationSeconds = expirationDate.getTime() / 1000;

        JwtRespuestaDto jwtRespuestaDto = new JwtRespuestaDto(jwt, usuarioDetails.getUsername(), usuarioDetails.getNombre(), RolDto.from(rol), expirationSeconds);
        return ResponseEntity.ok(jwtRespuestaDto);
    }

}
