package br.com.ifsul.gymail.service.user;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FindAllUsersService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll(String keyword) {
        return userRepository.findAll(keyword);
    }
}
