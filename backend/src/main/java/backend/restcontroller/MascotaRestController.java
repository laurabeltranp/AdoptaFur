package backend.restcontroller;

import java.util.Optional;

import backend.entity.Usuario;
import backend.service.UsuarioDetailsImpl;
import backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import backend.dto.AltaMascotaDto;
import backend.dto.MascotaDto;
import backend.dto.PesoFilter;
import backend.entity.Especie;
import backend.entity.Mascota;
import backend.service.MascotaService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/mascotas")
public class MascotaRestController {

	@Autowired
	MascotaService mascotaService;
	@Autowired
	UsuarioService usuarioService;

	@GetMapping("/")
	public ResponseEntity<?> mostrarDisponibles(@RequestParam(required = false) Especie especie,
			@RequestParam(required = false) String provincia, @RequestParam(required = false) PesoFilter peso) {
		return ResponseEntity.ok(MascotaDto
				.from(mascotaService.mostrarDisponibles(especie, provincia, peso != null ? peso.toPair() : null)));
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

}
