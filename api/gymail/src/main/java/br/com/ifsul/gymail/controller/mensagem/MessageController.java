package br.com.ifsul.gymail.controller.mensagem;

import br.com.ifsul.gymail.controller.mensagem.dto.MessageDTO;
import br.com.ifsul.gymail.controller.mensagem.dto.MessageRequest;
import br.com.ifsul.gymail.service.mensagem.GetMessageService;
import br.com.ifsul.gymail.service.mensagem.SendMessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/inbox")
public class MessageController implements MessageContract {

    @Autowired
    private SendMessageService sendMessageService;

    @Autowired
    private GetMessageService getMessageService;

    @Override
    @PostMapping
    public void sendMessage(@Valid @RequestBody MessageRequest request) throws Exception {
        log.info("Enviando mensagem para: " + request.getRecipientsEmail().toString());
        sendMessageService.sendMessage(request);
    }

    @Override
    @GetMapping
    public List<MessageDTO> getMessage(@RequestParam(value = "keyword", required = false) String keyword) {
        return getMessageService.getMessage(keyword);
    }
}
