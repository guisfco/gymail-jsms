import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Badge } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './EmailCreator.css'

export default class EmailCreator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipients: "",
            subject: "",
            content: ""
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
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
                        className="login-button email-creator-button"
                        variant="outlined">
                        Enviar
                </Button>
                </Grid>
            </Grid>
        )
    }
}
