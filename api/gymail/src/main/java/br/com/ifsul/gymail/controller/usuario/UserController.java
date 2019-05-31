package br.com.ifsul.gymail.controller.usuario;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.service.usuario.FindAllUsersService;
import br.com.ifsul.gymail.service.usuario.SaveUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserController implements UserContract {

    @Autowired
    private SaveUserService saveUserService;

    @Autowired
    private FindAllUsersService findAllUsersService;

    @Override
    @PostMapping
    public User save(@Valid @RequestBody User user) {
        log.info("Usuário inserido: " + user.toString());
        return saveUserService.save(user);
    }

    @Override
    @GetMapping
    public List<User> findAll(@RequestParam(value = "keyword", required = false) String keyword) {
        log.info("Buscando todos os usuários");
        return findAllUsersService.findAll(keyword);
    }

}
