package br.com.ifsul.gymail.service.user;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FindUserByEmailService {

    @Autowired
    private UserRepository userRepository;

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
