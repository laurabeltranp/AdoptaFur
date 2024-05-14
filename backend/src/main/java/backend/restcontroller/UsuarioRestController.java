package backend.restcontroller;

import backend.configuration.JwtUtils;
import backend.dto.*;
import backend.entity.Rol;
import backend.entity.Usuario;
import backend.service.UsuarioDetailsImpl;
import backend.service.RolService;
import backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.Locale;
import java.util.Optional;

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


    @PostMapping("/alta")
    public ResponseEntity<?> registerUser(@RequestBody UsuarioDto usuarioDto) {

        if(usuarioService.existeUsuarioConCorreo(usuarioDto.getEmail())){
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

    @GetMapping("/perfil")
    public ResponseEntity<?> mostrarUn(Authentication authentication){
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuario = usuarioService.buscarUno(userDetails.getUsername());
        if(usuario.isPresent()){
            return ResponseEntity.ok(PerfilDto.from(usuario.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/modificar")
    public ResponseEntity<?> modificar(Authentication authentication, @RequestBody PerfilDto perfilDto) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuarioOptional = usuarioService.buscarUno(userDetails.getUsername());
        if (usuarioOptional.isPresent()){
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

    @PostMapping("/login")
    public ResponseEntity<?> autenticandoLogin(@RequestBody PeticionDeLoginDto peticionDeLoginDto) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(peticionDeLoginDto.getEmail(), peticionDeLoginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UsuarioDetailsImpl usuarioDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Rol rol = usuarioDetails.getRol();

        // Obtener la fecha de vencimiento del token
        Date expirationDate = jwtUtils.getExpirationDateFromJwtToken(jwt);
        long expirationSeconds = expirationDate.getTime() / 1000;

        JwtRespuestaDto jwtRespuestaDto = new JwtRespuestaDto(jwt, usuarioDetails.getUsername(), usuarioDetails.getNombre(), RolDto.from(rol), expirationSeconds);
        return ResponseEntity.ok(jwtRespuestaDto);
    }

}
