package br.com.ifsul.gymail.controller.message;

import br.com.ifsul.gymail.controller.message.dto.MessageDTO;
import br.com.ifsul.gymail.controller.message.dto.MessageRequest;
import br.com.ifsul.gymail.security.UserPrincipal;
import br.com.ifsul.gymail.service.mail.GetMailByIdService;
import br.com.ifsul.gymail.service.mail.GetMailService;
import br.com.ifsul.gymail.service.mail.SendMailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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

    @Override
    @PostMapping
    public void sendMessage(@Valid @RequestBody final MessageRequest request, @AuthenticationPrincipal final UserPrincipal userPrincipal) {
        log.info("Enviando mensagem para: " + request.getRecipientsEmail().toString());
        sendMailService.sendMessage(request, userPrincipal);
    }

    @Override
    @GetMapping
    public List<MessageDTO> getMessage(@RequestParam(value = "keyword", required = false) final String keyword, @AuthenticationPrincipal final UserPrincipal userPrincipal) {
        log.info("Buscando mensagem pela palavra-chave: " + keyword);
        return getMailService.getMessage(keyword, userPrincipal);
    }

    @Override
    @GetMapping("/{id}/detail")
    public MessageDTO getMessageById(@PathVariable("id") final Long id, @AuthenticationPrincipal final UserPrincipal userPrincipal) {
        log.info("Buscando detalhes da mensagem de id: " + id);
        return getMailByIdService.getMessage(id, userPrincipal);
    }
}
