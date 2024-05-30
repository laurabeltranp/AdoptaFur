package backend.restcontroller;

import backend.dto.AltaMascotaDto;
import backend.dto.MascotaDto;
import backend.dto.PesoFilter;
import backend.entity.Especie;
import backend.entity.Mascota;
import backend.entity.Usuario;
import backend.service.MascotaService;
import backend.service.UsuarioDetailsImpl;
import backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para gestionar mascotas.
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/mascotas")
public class MascotaRestController {

    @Autowired
    MascotaService mascotaService;
    @Autowired
    UsuarioService usuarioService;

    /**
     * Muestra las mascotas disponibles para adopción, filtradas opcionalmente por especie, provincia y peso.
     *
     * @param especie la especie de la mascota (opcional)
     * @param provincia la provincia donde se encuentra la mascota (opcional)
     * @param peso el filtro de peso (opcional)
     * @return una lista de mascotas disponibles en formato DTO
     */
    @GetMapping("/")
    public ResponseEntity<?> mostrarDisponibles(@RequestParam(required = false) Especie especie, @RequestParam(required = false) String provincia, @RequestParam(required = false) PesoFilter peso) {
        return ResponseEntity.ok(MascotaDto.from(mascotaService.mostrarDisponibles(especie, provincia, peso != null ? peso.toPair() : null)));
    }

    /**
     * Da de alta una nueva mascota.
     *
     * @param altaMascotaDto los datos de la mascota a dar de alta
     * @param authentication la autenticación del usuario
     * @return una respuesta HTTP indicando el resultado de la operación
     */
    @PostMapping("/alta")
    public ResponseEntity<?> alta(@RequestBody AltaMascotaDto altaMascotaDto, Authentication authentication) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuario = usuarioService.buscarUno(userDetails.getUsername());
        if (mascotaService.alta(altaMascotaDto, usuario.get())) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Muestra una mascota específica por su ID.
     *
     * @param idMascota el ID de la mascota
     * @return la mascota en formato DTO o un estado 404 si no se encuentra
     */
    @GetMapping("/verUna/{idMascota}")
    public ResponseEntity<?> mostrarUna(@PathVariable Integer idMascota) {
        Optional<Mascota> mascota = mascotaService.mostrarUna(idMascota);
        if (mascota.isPresent()) {
            return ResponseEntity.ok(MascotaDto.from(mascota.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Muestra las mascotas del usuario autenticado.
     *
     * @param authentication la autenticación del usuario
     * @return una lista de las mascotas del usuario en formato DTO
     */
    @GetMapping("/misMascotas")
    public ResponseEntity<?> mostrarMisMascotas(Authentication authentication) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Usuario> usuario = usuarioService.buscarUno(userDetails.getUsername());
        if (usuario.isPresent()) {
            List<Mascota> misMascotas = mascotaService.mostrarMisMascotas(usuario.get().getEmail());
            List<MascotaDto> misMascotasDto = MascotaDto.from(misMascotas);
            return ResponseEntity.ok().body(misMascotasDto);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Modifica los datos de una mascota.
     *
     * @param authentication la autenticación del usuario
     * @param mascotaDto los datos de la mascota a modificar
     * @return una respuesta HTTP indicando el resultado de la operación
     */
    @PostMapping("/modificar")
    public ResponseEntity<?> modificandoMascota(Authentication authentication, @RequestBody MascotaDto mascotaDto) {
        UsuarioDetailsImpl userDetails = (UsuarioDetailsImpl) authentication.getPrincipal();
        Optional<Mascota> mascotaOptional = mascotaService.mostrarUna(mascotaDto.getIdMascota());

        if (mascotaOptional.isEmpty() || !mascotaOptional.get().getProtectora().getEmail().equals(userDetails.getUsername())) {
            return ResponseEntity.badRequest().build();
        }

        if (mascotaService.modificar(mascotaDto)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Muestra las últimas mascotas añadidas.
     *
     * @return una lista de las últimas mascotas en formato DTO
     */
    @GetMapping("/novedades")
    public ResponseEntity<?> mostrarUltimas() {
        return ResponseEntity.ok(MascotaDto.from(mascotaService.mostrarUltimasMascotas()));
    }

    /**
     * Muestra las mascotas adoptadas.
     *
     * @return una lista de las mascotas adoptadas en formato DTO
     */
    @GetMapping("/adoptadas")
    public ResponseEntity<?> mostrarAdoptadas() {
        return ResponseEntity.ok(MascotaDto.from(mascotaService.mostrarAdoptadas()));
    }

}
