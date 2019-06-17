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

import './MenuLateral.css'

export default class MenuLateral extends Component {

    constructor() {
        super()
        this.state = {
            sendMessage: false
        }
    }

    onSendMessage = (event) => {
        this.setState({
            sendMessage: true
        })
        this.props.sendMessage(this.state.sendMessage)
    }

    render() {
        return (
            <div className="menu-lateral-container">
                <List component="nav" aria-label="Main mailbox folders">
                    <div className="enviar-mensagem-button-container">
                        <Fab variant="extended" color="primary" aria-label="Add" className="enviar-mensagem-button" onClick={this.onSendMessage} sendMessage={this.props.sendMessage} >
                            <AddIcon />
                            <span className="enviar-mensagem-button">Escrever</span>
                        </Fab>
                    </div>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Caixa de entrada" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Não lidos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Enviados" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Amigos" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="Secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Lixo" />
                    </ListItem>
                </List>
                {this.props.children}
            </div>
        )
    }
}
