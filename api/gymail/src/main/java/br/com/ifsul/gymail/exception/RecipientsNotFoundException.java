package br.com.ifsul.gymail.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RecipientsNotFoundException extends RuntimeException {

    public RecipientsNotFoundException(String message) {
        super(message);
    }
}
