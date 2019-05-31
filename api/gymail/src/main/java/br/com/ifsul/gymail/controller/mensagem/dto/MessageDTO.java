package br.com.ifsul.gymail.controller.mensagem.dto;

import br.com.ifsul.gymail.controller.usuario.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {

    private Long id;

    private UserDTO sender;

    private String subject;

    private String content;

    private LocalDateTime dateTime;

}
