package br.com.ifsul.gymail.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString(exclude = "password")
@Entity
@Table(name = "Client")
public class User {

    @Id
    @Email(message = "O endereço fornecido deve ser um e-mail válido")
    @NotBlank(message = "E-mail deve ser preenchido")
    @Column(unique = true, nullable = false)
    private String email;

    @NotBlank(message = "Senha deve ser preenchida")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @NotBlank(message = "Primeiro nome deve ser preenchido")
    private String firstName;

    @NotBlank(message = "Sobrenome deve ser preenchido")
    private String lastName;

}
