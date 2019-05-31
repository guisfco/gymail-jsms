package br.com.ifsul.gymail.service.usuario;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FindUserByEmailService {

    @Autowired
    private UserRepository repository;

    public User findUserByEmail(String email) {
        return repository.findByEmail(email);
    }
}
