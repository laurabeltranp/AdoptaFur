package backend.restcontroller;

import backend.dto.AltaSolicitudDto;
import backend.dto.SolicitudDto;
import backend.entity.Solicitud;
import backend.entity.Usuario;
import backend.service.SolicitudService;
import backend.service.UsuarioDetailsImpl;
import backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/solicitud")
public class SolicitudRestController {
    @Autowired
    SolicitudService solicitudService;
    @Autowired
    UsuarioService usuarioService;

    @GetMapping("/")
    public ResponseEntity<?> verTodas(Authentication authentication) {
        return ResponseEntity.ok(SolicitudDto.from(solicitudService.mostrarTodas((String) authentication.getPrincipal())));
    }

    @GetMapping("/{idSolicitud}")
    public ResponseEntity<?> verUna(@PathVariable Integer idSolicitud) {
        Optional<Solicitud> solicitud = solicitudService.mostrarUna(idSolicitud);
        if (solicitud.isPresent()) {
            return ResponseEntity.ok(SolicitudDto.from(solicitud.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{idSolicitud}/aceptar")
    public ResponseEntity<?> aceptar(@PathVariable Integer idSolicitud) {
        if (solicitudService.aceptar(idSolicitud)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{idSolicitud}/cancelar")
    public ResponseEntity<?> cancelar(@PathVariable Integer idSolicitud) {
        if (solicitudService.cancelar(idSolicitud)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{idSolicitud}/denegar")
    public ResponseEntity<?> denegar(@PathVariable Integer idSolicitud) {
        if (solicitudService.denegar(idSolicitud)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/alta")
    public ResponseEntity<?> crear(Authentication authentication, @RequestBody AltaSolicitudDto altaSolicitudDto) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuario = usuarioService.buscarUno(userDetails.getUsername());

        Solicitud solicitud = solicitudService.crear(usuario.get().getEmail(), altaSolicitudDto);

        if (solicitud != null) {
            return ResponseEntity.ok(SolicitudDto.from(solicitud));
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
    // TODO: Modificar una solicitud
}
