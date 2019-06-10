package br.com.ifsul.gymail.controller.authentication;

import br.com.ifsul.gymail.controller.authentication.dto.AuthRequest;
import br.com.ifsul.gymail.controller.authentication.dto.AuthResponse;
import br.com.ifsul.gymail.security.AuthenticationService;
import br.com.ifsul.gymail.security.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/public/auth")
public class AuthenticationController implements AuthenticationContract {

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    @PostMapping
    public AuthResponse authenticate(@Valid @RequestBody final AuthRequest authRequest) {
        final String token = authenticationService.authenticate(authRequest.getEmail(), authRequest.getPassword());
        return new AuthResponse(token, CustomUserDetailsService.getUser());
    }
}
