package backend.service;

import backend.entity.Especie;
import backend.entity.Raza;
import backend.repository.RazaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Servicio para gestionar las operaciones relacionadas con las razas de mascotas.
 */
@Service
public class RazaService {

    @Autowired
    RazaRepository razaRepository;

    /**
     * Muestra todas las razas de una especie específica.
     *
     * @param especie la especie de la mascota
     * @return una lista de razas correspondientes a la especie dada
     */
    public List<Raza> mostrarRazasPorEspecie(Especie especie) {
        return razaRepository.findAllByEspecie(especie);
    }

    /**
     * Muestra una raza específica por su ID.
     *
     * @param idRaza el ID de la raza
     * @return un Optional que contiene la raza si se encuentra
     */
    public Optional<Raza> mostrarUna(Integer idRaza) {
        return razaRepository.findById(idRaza);
    }
}
