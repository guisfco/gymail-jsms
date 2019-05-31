package br.com.ifsul.gymail.service.usuario;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FindAllUsersService {

    @Autowired
    private UserRepository repository;

    public List<User> findAll(String keyword) {
        return repository.findAll(keyword);
    }
}
