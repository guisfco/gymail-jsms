package br.com.ifsul.gymail.service.message;

import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.exception.MessageNotFoundException;
import br.com.ifsul.gymail.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetMessageByIdService {

    @Autowired
    private MessageRepository messageRepository;


    public Message getMessage(final Long idMessage) {
        return messageRepository.findById(idMessage).orElseThrow(() -> new MessageNotFoundException("A mensagem requisitada não foi encontrada"));
    }
}
