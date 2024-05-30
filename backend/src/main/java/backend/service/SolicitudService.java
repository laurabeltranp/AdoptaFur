package backend.service;

import backend.dto.AltaSolicitudDto;
import backend.entity.Mascota;
import backend.entity.Solicitud;
import backend.entity.Usuario;
import backend.repository.SolicitudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * Servicio para gestionar las operaciones relacionadas con las solicitudes de adopción.
 */
@Service
public class SolicitudService {
    @Autowired
    private SolicitudRepository solicitudRepository;
    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private MascotaService mascotaService;

    /**
     * Muestra una solicitud específica por su ID.
     *
     * @param idSolicitud el ID de la solicitud
     * @return un Optional que contiene la solicitud si se encuentra
     */
    public Optional<Solicitud> mostrarUna(Integer idSolicitud) {
        return solicitudRepository.findById(idSolicitud);
    }

    /**
     * Acepta una solicitud cambiando su estado a 'ACEPTADA' y rechaza las demás solicitudes para la misma mascota.
     *
     * @param idSolicitud el ID de la solicitud
     * @return true si la solicitud fue aceptada con éxito, false en caso contrario
     */
    public boolean aceptar(Integer idSolicitud) {
        boolean solicitudAceptada = actualizarEstado(idSolicitud, Solicitud.Estado.ACEPTADA);

        if (solicitudAceptada) {

            Solicitud solicitudAceptadaObj = solicitudRepository.findById(idSolicitud)
                    .orElseThrow(() -> new IllegalArgumentException("Solicitud no encontrada"));

            List<Solicitud> solicitudes = mostrarTodasPorMascota(solicitudAceptadaObj.getMascota());

            for (Solicitud solicitud : solicitudes) {
                if (!solicitud.getId().equals(idSolicitud)) {
                    actualizarEstado(solicitud.getId(), Solicitud.Estado.RECHAZADA);
                }
            }
        }

        return solicitudAceptada;
    }

    /**
     * Cancela una solicitud cambiando su estado a 'CANCELADA'.
     *
     * @param idSolicitud el ID de la solicitud
     * @return true si la solicitud fue cancelada con éxito, false en caso contrario
     */
    public boolean cancelar(Integer idSolicitud) {
        return actualizarEstado(idSolicitud, Solicitud.Estado.CANCELADA);
    }

    /**
     * Deniega una solicitud cambiando su estado a 'RECHAZADA'.
     *
     * @param idSolicitud el ID de la solicitud
     * @return true si la solicitud fue denegada con éxito, false en caso contrario
     */
    public boolean denegar(Integer idSolicitud) {
        return actualizarEstado(idSolicitud, Solicitud.Estado.RECHAZADA);
    }

    /**
     * Actualiza el estado de una solicitud.
     *
     * @param idSolicitud el ID de la solicitud
     * @param estado el nuevo estado de la solicitud
     * @return true si la actualización fue exitosa, false en caso contrario
     */
    private boolean actualizarEstado(Integer idSolicitud, Solicitud.Estado estado) {
        return solicitudRepository.findById(idSolicitud).map(solicitud -> {
            solicitud.setEstado(estado);
            solicitudRepository.save(solicitud);
            return true;
        }).orElse(false);
    }

    /**
     * Muestra todas las solicitudes de un usuario o protectora según su rol.
     *
     * @param email el email del usuario o protectora
     * @return una lista de solicitudes
     */
    public List<Solicitud> mostrarTodas(String email) {
        return usuarioService.buscarUno(email).map(usuario -> {
            if (usuario.getRol().getNombre().equalsIgnoreCase("PROTECTORA")) {
                return solicitudRepository.findAllByMascotaProtectora(usuario);
            } else {
                return solicitudRepository.findAllByUsuario(usuario);
            }
        }).orElse(Collections.emptyList());
    }

    /**
     * Crea una nueva solicitud de adopción.
     *
     * @param email el email del usuario
     * @param altaSolicitudDto el DTO con los datos de la nueva solicitud
     * @return la solicitud creada
     */
    public Solicitud crear(String email, AltaSolicitudDto altaSolicitudDto) {
        Usuario usuario = usuarioService.buscarUno(email).orElse(null);
        Mascota mascota = mascotaService.mostrarUna(altaSolicitudDto.idMascota()).orElse(null);

        if (usuario == null || mascota == null) {
            return null;
        }

        Solicitud solicitud = new Solicitud();
        solicitud.setUsuario(usuario);
        solicitud.setMascota(mascota);
        solicitud.setFecha(LocalDateTime.now());
        solicitud.setEstado(Solicitud.Estado.PENDIENTE);
        solicitud.setTipoHogar(altaSolicitudDto.tipoHogar());
        solicitud.setAlergias(altaSolicitudDto.alergias());
        solicitud.setFamilia(altaSolicitudDto.familia());

        return solicitudRepository.saveAndFlush(solicitud);
    }

    /**
     * Muestra todas las solicitudes para una mascota específica.
     *
     * @param mascota la mascota
     * @return una lista de solicitudes
     */
    public List<Solicitud> mostrarTodasPorMascota(Mascota mascota) {
        return solicitudRepository.findAllByMascota(mascota);
    }

    /**
     * Modifica una solicitud existente.
     *
     * @param solicitud la solicitud a modificar
     */
    public void modificarSolicitud(Solicitud solicitud) {
        solicitudRepository.save(solicitud);
    }
}
