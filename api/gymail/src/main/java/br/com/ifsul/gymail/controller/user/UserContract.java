package br.com.ifsul.gymail.controller.user;

import br.com.ifsul.gymail.domain.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import javax.validation.Valid;
import java.util.List;

@Api(description = "Responsável pelos serviços referentes ao usuário")
public interface UserContract {

    @ApiOperation(value = "Insere um usuário")
    User save(@Valid final User user);

    @ApiOperation(value = "Busca todos os usuários baseado no filtro")
    List<User> findAll(final String keyword);

}
