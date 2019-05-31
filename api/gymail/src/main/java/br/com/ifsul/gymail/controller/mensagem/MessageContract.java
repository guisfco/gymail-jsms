package br.com.ifsul.gymail.controller.mensagem;

import br.com.ifsul.gymail.controller.mensagem.dto.MessageDTO;
import br.com.ifsul.gymail.controller.mensagem.dto.MessageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import javax.validation.Valid;
import java.util.List;

@Api(description = "Responsável pelos serviços referentes ao envio e recebimento de mensagens")
public interface MessageContract {

    @ApiOperation(value = "Envia uma mensagem para um ou mais destinatários")
    void sendMessage(@Valid MessageRequest request) throws Exception;

    @ApiOperation(value = "Busca todas as mensagens baseado no filtro")
    List<MessageDTO> getMessage(String keyword);
}
