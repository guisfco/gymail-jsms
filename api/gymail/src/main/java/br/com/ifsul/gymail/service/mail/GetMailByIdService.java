package br.com.ifsul.gymail.service.mail;

import br.com.ifsul.gymail.commons.MessageFactory;
import br.com.ifsul.gymail.controller.message.dto.MessageDTO;
import br.com.ifsul.gymail.controller.user.dto.UserDTO;
import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.config.security.UserPrincipal;
import br.com.ifsul.gymail.service.message.GetMessageByIdService;
import br.com.ifsul.gymail.service.user.FindUserByEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetMailByIdService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private FindUserByEmailService findUserByEmailService;

    @Autowired
    private GetMessageByIdService getMessageByIdService;

    public MessageDTO getMessage(final Long idMessage, final UserPrincipal userPrincipal) {
        final Message message = getMessageByIdService.getMessage(idMessage, userPrincipal);
        final boolean isMessageUnread = !message.isRead();

        if (isMessageUnread) {
            message.setRead(true);
            messageRepository.save(message);
        }

        UserDTO sender = new UserDTO(findUserByEmailService.findUserByEmail(message.getSender()));

        return MessageFactory.map(message, sender);
    }
}
