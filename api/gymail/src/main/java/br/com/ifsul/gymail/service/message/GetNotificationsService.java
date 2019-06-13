package br.com.ifsul.gymail.service.message;

import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.config.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetNotificationsService {

    @Autowired
    private MessageRepository messageRepository;

    public int getNotifications(final UserPrincipal userPrincipal) {
        return messageRepository.findNumberOfUnreadMessage(userPrincipal.getEmail());
    }
}
