package br.com.ifsul.gymail.security;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        User usuario = userRepository.findByEmail(email);
        return UserPrincipal.create(usuario);
    }

    public UserDetails loadUserById(String email) {
        User usuario = userRepository.findByEmail(email);
        return UserPrincipal.create(usuario);
    }

    public static UserPrincipal getUser() {
        return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
