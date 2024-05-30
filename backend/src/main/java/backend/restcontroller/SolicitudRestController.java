package backend.restcontroller;

import backend.dto.AltaSolicitudDto;
import backend.dto.MensajeDto;
import backend.dto.SolicitudDto;
import backend.entity.EstadoMascota;
import backend.entity.Mascota;
import backend.entity.Solicitud;
import backend.entity.Usuario;
import backend.service.MascotaService;
import backend.service.SolicitudService;
import backend.service.UsuarioDetailsImpl;
import backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Controlador REST para gestionar solicitudes.
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/solicitud")
public class SolicitudRestController {
    @Autowired
    SolicitudService solicitudService;
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    private MascotaService mascotaService;


    /**
     * Obtiene todas las solicitudes del usuario autenticado.
     *
     * @param authentication el objeto de autenticación del usuario
     * @return una lista de solicitudes en formato DTO
     */
    @GetMapping("/")
    public ResponseEntity<?> verTodas(Authentication authentication) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        return ResponseEntity.ok(SolicitudDto.from(solicitudService.mostrarTodas(userDetails.getUsername())));
    }

    /**
     * Obtiene una solicitud específica por su ID.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param idSolicitud el ID de la solicitud
     * @return la solicitud en formato DTO o un estado 404 si no se encuentra
     */
    @GetMapping("/{idSolicitud}")
    public ResponseEntity<?> verUna(Authentication authentication, @PathVariable Integer idSolicitud) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();

        Optional<Solicitud> solicitud = solicitudService.mostrarUna(idSolicitud);
        if (solicitud.isPresent()) {
            if (!solicitud.get().getUsuario().getEmail().equals(userDetails.getUsername())) {
                return ResponseEntity.badRequest().build();
            }
            return ResponseEntity.ok(SolicitudDto.from(solicitud.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Acepta una solicitud específica por su ID.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param idSolicitud el ID de la solicitud
     * @return un estado 200 si la solicitud se aceptó correctamente o un estado 404 si no se encuentra
     */
    @PutMapping("/{idSolicitud}/aceptar")
    public ResponseEntity<?> aceptar(Authentication authentication, @PathVariable Integer idSolicitud) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();

        Optional<Solicitud> optionalSolicitud = solicitudService.mostrarUna(idSolicitud);
        if (optionalSolicitud.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        if (!optionalSolicitud.get().getMascota().getProtectora().getEmail().equals(userDetails.getUsername())) {
            return ResponseEntity.badRequest().build();
        }
        if (!solicitudService.aceptar(idSolicitud)) {
            return ResponseEntity.notFound().build();
        }
        Solicitud solicitud = optionalSolicitud.get();
        Mascota mascota = solicitud.getMascota();
        mascotaService.actualizarEstado(mascota.getId(), EstadoMascota.ADOPTADA);
        return ResponseEntity.ok().build();
    }

    /**
     * Cancela una solicitud específica por su ID.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param idSolicitud el ID de la solicitud
     * @return un estado 200 si la solicitud se canceló correctamente o un estado 404 si no se encuentra
     */
    @PostMapping("/{idSolicitud}/cancelar")
    public ResponseEntity<?> cancelar(Authentication authentication, @PathVariable Integer idSolicitud) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();

        Optional<Solicitud> optionalSolicitud = solicitudService.mostrarUna(idSolicitud);
        if (optionalSolicitud.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        if (!optionalSolicitud.get().getUsuario().getEmail().equals(userDetails.getUsername())) {
            return ResponseEntity.badRequest().build();
        }

        if (solicitudService.cancelar(idSolicitud)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Deniega una solicitud específica por su ID.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param idSolicitud el ID de la solicitud
     * @return un estado 200 si la solicitud se denegó correctamente o un estado 404 si no se encuentra
     */
    @PutMapping("/{idSolicitud}/denegar")
    public ResponseEntity<?> denegar(Authentication authentication, @PathVariable Integer idSolicitud) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();

        Optional<Solicitud> optionalSolicitud = solicitudService.mostrarUna(idSolicitud);
        if (optionalSolicitud.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        if (!optionalSolicitud.get().getMascota().getProtectora().getEmail().equals(userDetails.getUsername())) {
            return ResponseEntity.badRequest().build();
        }
        if (solicitudService.denegar(idSolicitud)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Crea una nueva solicitud.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param altaSolicitudDto el objeto DTO que contiene los detalles de la nueva solicitud
     * @return la solicitud creada en formato DTO o un estado 400 si hay un error
     */
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

    /**
     * Obtiene todas las solicitudes para una mascota específica por su ID.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param idMascota el ID de la mascota
     * @return una lista de solicitudes en formato DTO o un estado 400 si el usuario no es la protectora de la mascota
     */
    @GetMapping("/porMascota/{idMascota}")
    public ResponseEntity<?> verTodasPorMascotas(Authentication authentication, @PathVariable Integer idMascota) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Mascota mascota = mascotaService.mostrarUna(idMascota).get();
        if (mascota.getProtectora().getEmail().equals(userDetails.getUsername())) {
            return ResponseEntity.ok(SolicitudDto.from(solicitudService.mostrarTodasPorMascota(mascota)));
        }
        return ResponseEntity.badRequest().build();
    }

    /**
     * Modifica una solicitud específica.
     *
     * @param authentication el objeto de autenticación del usuario
     * @param solicitudDto el objeto DTO que contiene los nuevos detalles de la solicitud
     * @return un mensaje de éxito o un estado 400 si hay un error
     */
    @PutMapping("/modificar")
    public ResponseEntity<?> modificarSolicitud(Authentication authentication, @RequestBody SolicitudDto solicitudDto) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Solicitud solicitud = solicitudService.mostrarUna(solicitudDto.id()).get();
        if (solicitud.getUsuario().getEmail().equals(userDetails.getUsername())) {
            solicitud.setTipoHogar(solicitudDto.tipoHogar());
            solicitud.setAlergias(solicitudDto.alergias());
            solicitud.setFamilia(solicitudDto.familia());
            solicitudService.modificarSolicitud(solicitud);
            return ResponseEntity.ok(new MensajeDto("Solicitud modificada!"));
        }
        return ResponseEntity.badRequest().build();
    }
}
