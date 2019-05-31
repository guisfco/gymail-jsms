package br.com.ifsul.gymail.service.mensagem;

import br.com.ifsul.gymail.controller.mensagem.dto.MessageRequest;
import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.service.usuario.FindUserByEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class SendMessageService {

    @Autowired
    private MessageRepository repository;

    @Autowired
    private FindUserByEmailService findUserByEmailService;


    public void sendMessage(final MessageRequest messageRequest) throws Exception {
        final List<User> recipients = messageRequest.getRecipientsEmail().stream()
                .map(recipientEmail -> findUserByEmailService.findUserByEmail(recipientEmail))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        List<Message> messages;

        if (recipients.size() > 0) {
            messages = recipients.stream().map(u -> Message.builder()
                    .sender("guisanfrancisco@gmail.com")
                    .recipient(u.getEmail())
                    .subject(messageRequest.getSubject())
                    .content(messageRequest.getContent())
                    .build()).collect(Collectors.toList());
        } else {
            throw new RuntimeException("Destinatários inválidos"); //CRIAR EXCEPTION COM HTTPSTATUS
        }

        repository.saveAll(messages);
    }
}
