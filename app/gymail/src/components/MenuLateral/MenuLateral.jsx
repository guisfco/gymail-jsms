import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { UsuarioService, MessageService } from '../../services'

import './MenuLateral.css';

export default class MenuLateral extends Component {

    onSendMessage = (event) => {
        this.props.sendMessage(false)
    }

    getEmails = (read, deleted) => {
        MessageService.getEmails(UsuarioService.getToken(), "", read, deleted)
            .then((response) => {
                this.setState({
                    emails: response.data
                })
                this.props.emails(response.data)
                this.props.showFriends(false)
            })
    }

    showFriends = (event) => {
        this.props.showFriends(true)
    }

    render() {
        return (
            <div className="menu-lateral-container">
                <List component="nav" aria-label="Main mailbox folders">
                    <div className="enviar-mensagem-button-container">
                        <Fab variant="extended" color="primary" aria-label="Add" className="enviar-mensagem-button" onClick={this.onSendMessage} >
                            <AddIcon />
                            <span className="enviar-mensagem-button">Escrever</span>
                        </Fab>
                    </div>
                    <ListItem button onClick={() => this.getEmails(false, false)} >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Caixa de entrada" />
                    </ListItem>
                    <ListItem button onClick={() => this.getEmails(true, false)} >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lidos" />
                    </ListItem>
                    <ListItem button onClick={this.showFriends}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Amigos" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="Secondary mailbox folders">
                    <ListItem button onClick={() => this.getEmails(true, true)}>
                        <ListItemText primary="Lixo" />
                    </ListItem>
                </List>
                {this.props.children}
            </div>
        )
    }
}
