package backend.service;

import backend.entity.Rol;
import backend.entity.Usuario;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@EqualsAndHashCode
public class UsuarioDetailsImpl implements UserDetails {

	private static final long serialVersionUID = 1L;
    private String email;
    private String password;
    @Getter
    private String nombre;
    @Getter
    private Rol rol;

    public UsuarioDetailsImpl(String email, String password, String nombre,
                              Rol rol) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    public static UsuarioDetailsImpl build(Usuario usuario) {
        return new UsuarioDetailsImpl(
                usuario.getEmail(),
                usuario.getPassword(),
                usuario.getNombre(),
                usuario.getRol());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority(rol.getNombre()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
