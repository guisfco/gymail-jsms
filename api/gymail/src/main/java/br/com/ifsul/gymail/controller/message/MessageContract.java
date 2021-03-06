package br.com.ifsul.gymail.controller.message;

import br.com.ifsul.gymail.controller.message.dto.MessageDTO;
import br.com.ifsul.gymail.controller.message.dto.MessageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import javax.validation.Valid;
import java.util.List;

@Api(description = "Responsável pelos serviços referentes ao envio e recebimento de mensagens")
public interface MessageContract {

    @ApiOperation(value = "Envia uma mensagem para um ou mais destinatários")
    void sendMessage(@Valid final MessageRequest request);

    @ApiOperation(value = "Busca todas as mensagens baseado no filtro")
    List<MessageDTO> getMessage(final String keyword, final boolean deleted, final boolean read);

    @ApiOperation(value = "Busca os detalhes de uma mensagem")
    MessageDTO getMessageById(final Long id);

    @ApiOperation(value = "Deleta uma mensagem")
    void deleteMessage(final Long id);

    @ApiOperation(value = "Retorna o número de mensagens não lidas")
    int getNotifications();
}
