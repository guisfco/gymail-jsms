package br.com.ifsul.gymail.service.recipient;

import br.com.ifsul.gymail.domain.User;
import br.com.ifsul.gymail.exception.RecipientsNotFoundException;
import br.com.ifsul.gymail.service.user.FindUserByEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class GetRecipientsService {

    @Autowired
    private FindUserByEmailService findUserByEmailService;

    public List<User> getValidRecipients(final List<String> emails) {
        final List<User> recipients = emails.stream()
                .map(recipientEmail -> findUserByEmailService.findUserByEmail(recipientEmail))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        if (recipients.isEmpty()) {
            throw new RecipientsNotFoundException("Destinatário(s) não encontrado(s)");
        }

        return recipients;
    }
}
