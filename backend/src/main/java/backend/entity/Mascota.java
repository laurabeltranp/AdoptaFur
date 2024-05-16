package backend.entity;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Formula;

@Data
@Entity
@Table(name = "mascotas")
public class Mascota {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idmascota")
	private Integer id;
	private String nombre;
	@Enumerated(EnumType.STRING)
	private EstadoMascota estado;
	private LocalDate cumpleanio;
	private Float peso;
	private String provincia;
	private String description;
	@ManyToOne
	@JoinColumn(name = "idraza")
	private Raza raza;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private byte[] foto;
	@ManyToOne
	@JoinColumn(name = "protectora")
	private Usuario protectora;
	@Formula(value = "(SELECT COUNT(*) FROM solicitud s WHERE s.idmascota=idmascota)")
	Integer solicitudes;
}
