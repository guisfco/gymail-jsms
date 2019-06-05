package br.com.ifsul.gymail.service.mail;

import br.com.ifsul.gymail.controller.message.dto.MessageRequest;
import br.com.ifsul.gymail.domain.Message;
import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.repository.MessageRepository;
import br.com.ifsul.gymail.security.UserPrincipal;
import br.com.ifsul.gymail.service.recipient.GetRecipientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SendMailService {

    @Autowired
    private MessageRepository repository;

    @Autowired
    private GetRecipientsService getRecipientsService;


    public void sendMessage(final MessageRequest messageRequest, final UserPrincipal userPrincipal) {
        final List<User> recipients = getRecipientsService.getValidRecipients(messageRequest.getRecipientsEmail());

        final List<Message> messages = recipients.stream().map(u -> Message.builder()
                .sender(userPrincipal.getEmail())
                .recipient(u.getEmail())
                .subject(messageRequest.getSubject())
                .content(messageRequest.getContent())
                .build()).collect(Collectors.toList());
        repository.saveAll(messages);

    }
}
