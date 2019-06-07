package br.com.ifsul.gymail.commons;

import br.com.ifsul.gymail.controller.message.dto.MessageDTO;
import br.com.ifsul.gymail.controller.user.dto.UserDTO;
import br.com.ifsul.gymail.domain.Message;

public class MessageFactory {

    public static MessageDTO map(Message message, UserDTO sender) {
        return new MessageDTO(message.getId(),
                sender,
                message.getSubject(),
                message.getContent(),
                message.getDateTime(),
                message.isRead(),
                message.isDeleted()
        );
    }
}
