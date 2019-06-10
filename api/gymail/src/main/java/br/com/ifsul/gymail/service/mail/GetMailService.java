package br.com.ifsul.gymail.service.mail;

import br.com.ifsul.gymail.commons.MessageFactory;
import br.com.ifsul.gymail.controller.message.dto.MessageDTO;
import br.com.ifsul.gymail.controller.user.dto.UserDTO;
import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.security.UserPrincipal;
import br.com.ifsul.gymail.service.user.FindUserByEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GetMailService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private FindUserByEmailService findUserByEmailService;

    public List<MessageDTO> getMessage(final String keyword, final boolean deletedMessage, final UserPrincipal userPrincipal) {
        List<MessageDTO> messagesFormated = new ArrayList<>();
        final List<Message> messages = messageRepository.findAll(keyword, userPrincipal.getEmail(), deletedMessage);

        final boolean isMessagesNotEmpty = !messages.isEmpty();

        if (isMessagesNotEmpty) {
            messages.forEach(message -> {
                UserDTO sender = new UserDTO(findUserByEmailService.findUserByEmail(message.getSender()));
                messagesFormated.add(MessageFactory.map(message, sender));
            });
        }

        return messagesFormated;
    }
}
