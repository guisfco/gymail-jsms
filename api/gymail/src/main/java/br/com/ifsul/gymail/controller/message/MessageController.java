package br.com.ifsul.gymail.controller.message;

import br.com.ifsul.gymail.controller.message.dto.MessageDTO;
import br.com.ifsul.gymail.controller.message.dto.MessageRequest;
import br.com.ifsul.gymail.config.security.CustomUserDetailsService;
import br.com.ifsul.gymail.service.mail.DeleteMailByIdService;
import br.com.ifsul.gymail.service.mail.GetMailByIdService;
import br.com.ifsul.gymail.service.mail.GetMailService;
import br.com.ifsul.gymail.service.mail.SendMailService;
import br.com.ifsul.gymail.service.message.GetNotificationsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/inbox")
public class MessageController implements MessageContract {

    @Autowired
    private SendMailService sendMailService;

    @Autowired
    private GetMailService getMailService;

    @Autowired
    private GetMailByIdService getMailByIdService;

    @Autowired
    private DeleteMailByIdService deleteMailByIdService;

    @Autowired
    private GetNotificationsService getNotificationsService;

    @Override
    @PostMapping
    public void sendMessage(@Valid @RequestBody final MessageRequest request) {
        log.info("Enviando mensagem para: " + request.getRecipientsEmail().toString());
        sendMailService.sendMessage(request, CustomUserDetailsService.getUser());
    }

    @Override
    @GetMapping
    public List<MessageDTO> getMessage(@RequestParam(value = "keyword", required = false) final String keyword,
                                       @RequestParam(value = "deleted", required = false) final boolean deleted,
                                       @RequestParam(value = "read", required = false) final boolean read) {
        log.info("Buscando mensagem pela palavra-chave: " + keyword);
        return getMailService.getMessage(keyword, deleted, read, CustomUserDetailsService.getUser());
    }

    @Override
    @GetMapping("/{id}/detail")
    public MessageDTO getMessageById(@PathVariable("id") final Long id) {
        log.info("Buscando detalhes da mensagem de id: " + id);
        return getMailByIdService.getMessage(id, CustomUserDetailsService.getUser());
    }

    @Override
    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable("id") final Long id) {
        log.info("Deletando mensagem de id: " + id);
        deleteMailByIdService.delete(id);
    }

    @Override
    @GetMapping("/notifications")
    public int getNotifications() {
        return getNotificationsService.getNotifications(CustomUserDetailsService.getUser());
    }


}
