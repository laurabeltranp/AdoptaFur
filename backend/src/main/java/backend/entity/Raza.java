package backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "razas")
public class Raza {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idraza")
	private Integer idRaza;
	private String nombre;
	@Enumerated(EnumType.STRING)
	private Especie especie;
}
