package br.com.ifsul.gymail.service.mensagem;

import br.com.ifsul.gymail.controller.mensagem.dto.MessageDTO;
import br.com.ifsul.gymail.controller.usuario.dto.UserDTO;
import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.service.usuario.FindUserByEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GetMessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private FindUserByEmailService findUserByEmailService;

    public List<MessageDTO> getMessage(String keyword) {
        List<MessageDTO> messagesFormated = new ArrayList<>();
        List<Message> messages = messageRepository.findAll(keyword);

        if (messages.size() > 0) {
            messages.forEach(message -> {
                UserDTO sender = new UserDTO(findUserByEmailService.findUserByEmail(message.getRecipient()));
                MessageDTO messageDTO = new MessageDTO(message.getId(), sender, message.getSubject(), message.getContent(), message.getDateTime());
                messagesFormated.add(messageDTO);
            });
        }

        return messagesFormated;
    }
}
