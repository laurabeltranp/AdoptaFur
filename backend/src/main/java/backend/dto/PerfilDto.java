package backend.dto;

import backend.entity.Usuario;
import lombok.Value;

import java.time.LocalDate;

@Value
public class PerfilDto {
    private String email;
    private String nombre;
    private String apellidos;
    private String telefono;
    private LocalDate cumpleanio;
    private String provincia;
    private String descripcion;

    public static PerfilDto from(Usuario usuario) {
        return new PerfilDto(usuario.getEmail(), usuario.getNombre(), usuario.getApellidos(),
                usuario.getTelefono(), usuario.getCumpleanio(), usuario.getProvincia(), usuario.getDescription()
        );
    }
}
