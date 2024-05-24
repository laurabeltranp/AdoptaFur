package backend.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import backend.dto.MascotaDto;
import backend.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import backend.dto.AltaMascotaDto;
import backend.repository.MascotaRepository;
import backend.repository.RazaRepository;

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

    public Optional<Mascota> mostrarUna(Integer idMascota) {
        return mascotaRepository.findById(idMascota);
    }

    public List<Mascota> mostrarMisMascotas(String emailProtectora) {
        return mascotaRepository.findAllByProtectoraEmail(emailProtectora);
    }

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

    public List<Mascota> mostrarUltimasMascotas() {
        return mascotaRepository.findTop8ByEstadoOrderByFechaAltaDesc(EstadoMascota.DISPONIBLE);
    }

    public List<Mascota> mostrarAdoptadas() {
        return mascotaRepository.findAllByEstado(EstadoMascota.ADOPTADA);
    }

    public void actualizarEstado(Integer id, EstadoMascota nuevoEstado) {
        Mascota mascota =mascotaRepository.findById(id).get();
        mascota.setEstado(nuevoEstado);
        mascotaRepository.save(mascota);
    }
}
