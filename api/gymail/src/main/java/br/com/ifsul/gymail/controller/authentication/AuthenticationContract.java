package br.com.ifsul.gymail.controller.authentication;

import br.com.ifsul.gymail.controller.authentication.dto.AuthRequest;
import br.com.ifsul.gymail.controller.authentication.dto.AuthResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import javax.validation.Valid;

@Api(description = "Responsável pelos serviços referentes a autenticação")
public interface AuthenticationContract {

    @ApiOperation("Autentica o usuário, retornando um token de acesso")
    AuthResponse authenticate(@Valid final AuthRequest authRequest);
}
