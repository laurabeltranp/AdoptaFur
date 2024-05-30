package backend.service;

import backend.dto.AltaMascotaDto;
import backend.dto.MascotaDto;
import backend.entity.Especie;
import backend.entity.EstadoMascota;
import backend.entity.Mascota;
import backend.entity.Usuario;
import backend.repository.MascotaRepository;
import backend.repository.RazaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Servicio para gestionar las operaciones relacionadas con las mascotas.
 */
@Service
public class MascotaService {

    @Autowired
    MascotaRepository mascotaRepository;
    @Autowired
    RazaRepository razaRepository;
    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private RazaService razaService;

    /**
     * Muestra las mascotas disponibles para adopción, filtradas opcionalmente por especie, provincia y peso.
     *
     * @param especie la especie de la mascota (opcional)
     * @param provincia la provincia donde se encuentra la mascota (opcional)
     * @param peso el filtro de peso (opcional)
     * @return una lista de mascotas disponibles
     */
    public List<Mascota> mostrarDisponibles(Especie especie, String provincia, Pair<Integer, Integer> peso) {
        if (especie != null) {
            if (peso != null) {
                if (StringUtils.hasText(provincia)) {
                    return mascotaRepository.findAllByRazaEspecieAndEstadoAndProvinciaContainingAndPesoBetween(especie,
                            EstadoMascota.DISPONIBLE, provincia, peso.getFirst(), peso.getSecond());
                } else {
                    return mascotaRepository.findAllByRazaEspecieAndEstadoAndPesoBetween(especie,
                            EstadoMascota.DISPONIBLE, peso.getFirst(), peso.getSecond());
                }
            } else {
                if (StringUtils.hasText(provincia)) {
                    return mascotaRepository.findAllByRazaEspecieAndEstadoAndProvinciaContaining(especie,
                            EstadoMascota.DISPONIBLE, provincia);
                } else {
                    return mascotaRepository.findAllByRazaEspecieAndEstado(especie, EstadoMascota.DISPONIBLE);
                }
            }
        } else {
            if (peso != null) {
                if (StringUtils.hasText(provincia)) {
                    return mascotaRepository.findAllByEstadoAndProvinciaContainingAndPesoBetween(
                            EstadoMascota.DISPONIBLE, provincia, peso.getFirst(), peso.getSecond());
                } else {
                    return mascotaRepository.findAllByEstadoAndPesoBetween(EstadoMascota.DISPONIBLE, peso.getFirst(),
                            peso.getSecond());
                }
            } else {
                if (StringUtils.hasText(provincia)) {
                    return mascotaRepository.findAllByEstadoAndProvinciaContaining(EstadoMascota.DISPONIBLE, provincia);
                } else {
                    return mascotaRepository.findAllByEstado(EstadoMascota.DISPONIBLE);
                }
            }
        }
    }

    /**
     * Da de alta una nueva mascota.
     *
     * @param altaMascotaDto los datos de la mascota a dar de alta
     * @param usuario el usuario que da de alta la mascota
     * @return true si la mascota se dio de alta correctamente, false en caso contrario
     */
    public boolean alta(AltaMascotaDto altaMascotaDto, Usuario usuario) {
        Mascota mascota = new Mascota();
        mascota.setNombre(altaMascotaDto.getNombre());
        mascota.setCumpleanio(altaMascotaDto.getCumpleanio());
        mascota.setPeso(altaMascotaDto.getPeso());
        mascota.setProvincia(altaMascotaDto.getProvincia());
        mascota.setDescription(altaMascotaDto.getDescription());
        mascota.setFoto(altaMascotaDto.getFoto().getBytes());
        mascota.setEstado(EstadoMascota.DISPONIBLE);
        mascota.setRaza(razaRepository.findById(altaMascotaDto.getIdRaza()).orElseThrow());
        mascota.setProtectora(usuario);
        mascota.setFechaAlta(LocalDateTime.now());

        return mascotaRepository.save(mascota) != null;
    }

    /**
     * Muestra una mascota específica por su ID.
     *
     * @param idMascota el ID de la mascota
     * @return un Optional que contiene la mascota si se encuentra
     */
    public Optional<Mascota> mostrarUna(Integer idMascota) {
        return mascotaRepository.findById(idMascota);
    }

    /**
     * Muestra las mascotas del usuario dado su email.
     *
     * @param emailProtectora el email del usuario
     * @return una lista de mascotas del usuario
     */
    public List<Mascota> mostrarMisMascotas(String emailProtectora) {
        return mascotaRepository.findAllByProtectoraEmail(emailProtectora);
    }

    /**
     * Modifica los datos de una mascota.
     *
     * @param mascotaDto los datos de la mascota a modificar
     * @return true si la mascota se modificó correctamente, false en caso contrario
     */
    public boolean modificar(MascotaDto mascotaDto) {
        Mascota mascota = mascotaRepository.findById(mascotaDto.getIdMascota()).get();
        mascota.setNombre(mascotaDto.getNombre());
        mascota.setCumpleanio(mascotaDto.getCumpleanio());
        mascota.setPeso(mascotaDto.getPeso());
        mascota.setProvincia(mascotaDto.getProvincia());
        mascota.setDescription(mascotaDto.getDescription());
        mascota.setFoto(mascotaDto.getFoto().getBytes());
        mascota.setEstado(mascotaDto.getEstado());
        return mascotaRepository.save(mascota) != null;
    }

    /**
     * Muestra las últimas mascotas añadidas.
     *
     * @return una lista de las últimas mascotas
     */
    public List<Mascota> mostrarUltimasMascotas() {
        return mascotaRepository.findTop8ByEstadoOrderByFechaAltaDesc(EstadoMascota.DISPONIBLE);
    }

    /**
     * Muestra las mascotas adoptadas.
     *
     * @return una lista de las mascotas adoptadas
     */
    public List<Mascota> mostrarAdoptadas() {
        return mascotaRepository.findAllByEstado(EstadoMascota.ADOPTADA);
    }

    /**
     * Actualiza el estado de una mascota.
     *
     * @param id el ID de la mascota
     * @param nuevoEstado el nuevo estado de la mascota
     */
    public void actualizarEstado(Integer id, EstadoMascota nuevoEstado) {
        Mascota mascota = mascotaRepository.findById(id).get();
        mascota.setEstado(nuevoEstado);
        mascotaRepository.save(mascota);
    }
}
