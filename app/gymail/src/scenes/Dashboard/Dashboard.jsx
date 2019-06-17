import React, { Component } from 'react';
import { MenuLateral, Header, LinhaEmail, Toastr } from '../../components';
import { EmailCreator, EmailViewer } from '../../scenes';
import List from '@material-ui/core/List';
import { ReactUtils, MessageService, UsuarioService } from '../../services';
import CONFIG from '../../config'

import './Dashboard.css';
import FriendList from '../FriendList/FriendList';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emails: [],
            email: null,
            wasSelected: false,
            friendList: false,
            sendMessage: false
        }
    }

    renderEmails() {
        return this.state.emails.map((email, index) => {
            return <LinhaEmail key={email.id} content={email.content.length > 40 ? email.content.substr(0,50) + "..." : email.content} subject={email.subject} recipient={`${email.sender.firstName} ${email.sender.lastName}`} initials={`${email.sender.firstName.substr(0, 1)}${email.sender.lastName.substr(0, 1)}`} isRead={email.read} position={index} viewer={this.openViewer} />
        })
    }

    getEmails = (event) => {
        this.setState({ emails: event })
    }

    getSendMessage = (event) => {
        this.setState({ sendMessage: event })
    }

    getNotifications() {
        MessageService.getNotifications(UsuarioService.getToken())
            .then((response) => {
                this.setState({
                    notifications: response.data
                })
            })
    }

    openViewer = (position) => {
        let id = this.state.emails[position].id

        MessageService.getEmail(UsuarioService.getToken(), id)
            .then((response) => {
                this.setState({
                    email: response.data,
                    wasSelected: true
                })
            })
    }

    deleteEmail = (id) => {
        MessageService.deleteEmail(UsuarioService.getToken(), id)
            .then((response) => {
                Toastr.success(CONFIG.MENSAGENS.EXCLUIDO_SUCESSO)
            })
    }



    render() {
        return (
            <React.Fragment>
                {ReactUtils.redirectBase()}
                <Header notifications={this.state.notifications} emails={this.getEmails} />
                <div className="dashboard-container">
                    <MenuLateral sendMessage={this.getSendMessage}  className="dashboard-menu-lateral" emails={this.getEmails} />
                    <div className="dashboard-emails-container">
                        <List className="dashboard-lista-emails">
                        {this.state.friendList ? <FriendList /> :
                            this.renderEmails()
                        }
                        </List>
                        {this.state.wasSelected ? <EmailViewer
                            initials={`${this.state.email.sender.firstName.substr(0, 1)}${this.state.email.sender.lastName.substr(0, 1)}`}
                            subject={this.state.email.subject}
                            recipient={`${this.state.email.sender.firstName} ${this.state.email.sender.lastName}`}
                            content={this.state.email.content}
                            deleteEmail={this.deleteEmail}
                            id={this.state.email.id} />
                            : <EmailCreator />
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
