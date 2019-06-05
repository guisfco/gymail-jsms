package br.com.ifsul.gymail.service.user;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.exception.EmailAlreadyInUseException;
import br.com.ifsul.gymail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveUserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user) {
        final User userRegistered = userRepository.findByEmail(user.getEmail());
        final boolean isEmailAlreadyInUse = userRegistered != null;
        if (isEmailAlreadyInUse) {
            throw new EmailAlreadyInUseException("Este e-mail já está sendo utilizado");
        }
        return userRepository.save(user);
    }
}
