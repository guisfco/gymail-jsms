package br.com.ifsul.gymail.service.mail;

import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.security.CustomUserDetailsService;
import br.com.ifsul.gymail.service.message.GetMessageByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteMailByIdService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private GetMessageByIdService getMessageByIdService;

    public void delete(final Long id) {
        final Message message = getMessageByIdService.getMessage(id, CustomUserDetailsService.getUser());
        message.setDeleted(true);
        messageRepository.save(message);
    }
}
