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

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/mascotas")
public class MascotaRestController {

    @Autowired
    MascotaService mascotaService;
    @Autowired
    UsuarioService usuarioService;

    @GetMapping("/")
    public ResponseEntity<?> mostrarDisponibles(@RequestParam(required = false) Especie especie, @RequestParam(required = false) String provincia, @RequestParam(required = false) PesoFilter peso) {
        return ResponseEntity.ok(MascotaDto.from(mascotaService.mostrarDisponibles(especie, provincia, peso != null ? peso.toPair() : null)));
    }

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

    @GetMapping("/verUna/{idMascota}")
    public ResponseEntity<?> mostrarUna(@PathVariable Integer idMascota) {
        Optional<Mascota> mascota = mascotaService.mostrarUna(idMascota);
        if (mascota.isPresent()) {
            return ResponseEntity.ok(MascotaDto.from(mascota.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

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

    @GetMapping("/novedades")
    public ResponseEntity<?> mostrarUltimas() {
        return ResponseEntity.ok(MascotaDto.from(mascotaService.mostrarUltimasMascotas()));
    }

    @GetMapping("/adoptadas")
    public ResponseEntity<?> mostrarAdoptadas() {
        return ResponseEntity.ok(MascotaDto.from(mascotaService.mostrarAdoptadas()));
    }

}
