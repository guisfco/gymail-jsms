package br.com.ifsul.gymail.controller.usuario;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.service.user.FindAllUsersService;
import br.com.ifsul.gymail.service.user.SaveUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        log.info("Buscando todos os usuários pela palavra-chave: " + keyword);
        return findAllUsersService.findAll(keyword);
    }

}
