package br.com.ifsul.gymail.controller.mensagem;

import br.com.ifsul.gymail.controller.mensagem.dto.MessageDTO;
import br.com.ifsul.gymail.controller.mensagem.dto.MessageRequest;
import br.com.ifsul.gymail.service.mail.GetMailByIdService;
import br.com.ifsul.gymail.service.mail.GetMailService;
import br.com.ifsul.gymail.service.mail.SendMailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void sendMessage(@Valid @RequestBody MessageRequest request) {
        log.info("Enviando mensagem para: " + request.getRecipientsEmail().toString());
        sendMailService.sendMessage(request);
    }

    @Override
    @GetMapping
    public List<MessageDTO> getMessage(@RequestParam(value = "keyword", required = false) String keyword) {
        log.info("Buscando mensagem pela palavra-chave: " + keyword);
        return getMailService.getMessage(keyword);
    }

    @Override
    @GetMapping("/{id}/detail")
    public MessageDTO getMessageById(@PathVariable("id") Long id) {
        log.info("Buscando detalhes da mensagem de id: " + id);
        return getMailByIdService.getMessage(id);
    }
}
