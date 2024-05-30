package backend.restcontroller;

import backend.dto.RazaDto;
import backend.entity.Especie;
import backend.entity.Raza;
import backend.service.RazaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


/**
 * Controlador REST para gestionar razas.
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/raza")
public class RazaRestController {

    @Autowired
    RazaService razaService;

    /**
     * Muestra todas las razas de una especie específica.
     *
     * @param especie la especie de la que se quieren obtener las razas
     * @return una lista de razas en formato DTO
     */
    @GetMapping("/{especie}")
    public ResponseEntity<?> mostrarRazasPorEspecie(@PathVariable Especie especie) {

        return ResponseEntity.ok(RazaDto.from(razaService.mostrarRazasPorEspecie(especie)));
    }

    /**
     * Muestra una raza específica por su ID.
     *
     * @param idRaza el ID de la raza
     * @return la raza en formato DTO o un estado 404 si no se encuentra
     */
    @GetMapping("/verUna/{idRaza}")
    public ResponseEntity<?> mostrarUna(@PathVariable Integer idRaza) {
        Optional<Raza> raza = razaService.mostrarUna(idRaza);
        if (raza.isPresent()) {
            return ResponseEntity.ok(RazaDto.from(raza.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
