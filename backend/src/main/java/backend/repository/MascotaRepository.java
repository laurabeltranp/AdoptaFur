package backend.repository;

import backend.entity.Especie;
import backend.entity.EstadoMascota;
import backend.entity.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota, Integer> {
    public List<Mascota> findAllByEstado(EstadoMascota estado);

    public List<Mascota> findAllByRazaEspecieAndEstado(Especie especie, EstadoMascota disponible);

    public List<Mascota> findAllByEstadoAndPesoBetween(EstadoMascota disponible, Integer pesoMin, Integer pesoMax);

    public List<Mascota> findAllByRazaEspecieAndEstadoAndPesoBetween(Especie especie, EstadoMascota disponible,
                                                                     Integer pesoMin, Integer pesoMax);

    public List<Mascota> findAllByEstadoAndProvinciaContaining(EstadoMascota disponible, String provincia);

    public List<Mascota> findAllByRazaEspecieAndEstadoAndProvinciaContaining(Especie especie, EstadoMascota disponible,
                                                                             String provincia);

    public List<Mascota> findAllByEstadoAndProvinciaContainingAndPesoBetween(EstadoMascota disponible, String provincia,
                                                                             Integer pesoMin, Integer pesoMax);

    public List<Mascota> findAllByRazaEspecieAndEstadoAndProvinciaContainingAndPesoBetween(Especie especie,
                                                                                           EstadoMascota disponible, String provincia, Integer pesoMin, Integer pesoMax);

    public List<Mascota> findAllByProtectoraEmail(String email);

    public List<Mascota> findTop8ByEstadoOrderByFechaAltaDesc(EstadoMascota estado);

}
