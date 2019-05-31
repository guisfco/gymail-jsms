package br.com.ifsul.gymail.controller.mensagem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {

    @NotEmpty(message = "A mensagem deve possuir ao menos um destinatário")
    private List<String> recipientsEmail;

    private String subject;

    private String content;

}
