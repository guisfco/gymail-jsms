package br.com.ifsul.gymail.controller.authentication.dto;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.security.UserPrincipal;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthResponse {

    private String token;
    private User user;

    public AuthResponse(String token, UserPrincipal userPrincipal) {
        this.token = token;
        this.user = new User(userPrincipal.getEmail(), userPrincipal.getPassword(), userPrincipal.getFirstName(), userPrincipal.getLastName());
    }
}
