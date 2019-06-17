import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { MessageService, UsuarioService } from '../../services';
import { Toastr } from '../../components';
import CONFIG from '../../config';

import './EmailCreator.css'

export default class EmailCreator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipients: [],
            subject: "",
            content: "",
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    getFormattedRecipients = () => {
        let recipients = this.state.recipients
        recipients = recipients.toString().split(",")
        recipients = recipients.map((recipient, index) => {
            return recipient.trim()
        })

        return recipients
    }

    sendEmail = () => {
        const dados = {
            content: this.state.content,
            subject: this.state.subject,
            recipientsEmail: this.getFormattedRecipients()
        }

        MessageService.sendEmail(UsuarioService.getToken(), dados)
            .then((response) => {
                Toastr.success(CONFIG.MENSAGENS.ENVIADO_SUCESSO)
            }).catch((err) => {
                Toastr.error(err.response.data.message)
            })
    }

    render() {
        return (
            <Grid xs={12} className="email-creator-container">
                
                <TextField
                    className="email-creator-input"
                    variant="outlined"
                    type="text"
                    label="Destinatários"
                    name="recipients"
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <TextField
                    className="email-creator-input"
                    variant="outlined"
                    type="text"
                    label="Assunto"
                    name="subject"
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <TextField
                    className="email-creator-input email-creator-text-area"
                    variant="outlined"
                    multiline
                    rows="10"
                    label="Conteúdo"
                    name="content"
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <Grid xs={2} justify="flex-end">
                    <Button
                        onClick={this.sendEmail}
                        className="login-button email-creator-button"
                        variant="outlined">
                        Enviar
                </Button>
                </Grid>
            </Grid>
        )
    }
}
