package backend.dto;

import lombok.Value;

import java.time.LocalDate;

@Value
public class AltaMascotaDto {
    private String nombre;
    private LocalDate cumpleanio;
    private Float peso;
    private String provincia;
    private String description;
    private Integer idRaza;
    private String foto;
}
