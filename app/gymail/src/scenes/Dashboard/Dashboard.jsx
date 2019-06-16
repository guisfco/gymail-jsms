import React, { Component } from 'react';
import { MenuLateral, Header, LinhaEmail } from '../../components';
import { EmailCreator } from '../../scenes';
import List from '@material-ui/core/List';
import { ReactUtils, MessageService, UsuarioService } from '../../services';

import './Dashboard.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emails: []
        }
    }

    componentDidMount() {
        this.getEmails()
    }

    getEmails = () => {
        MessageService.getEmails(UsuarioService.getToken())
            .then((response) => {
                this.setState({
                    emails: response.data
                })
            })
    }

    renderEmails() {
        return this.state.emails.map((email, index) => {
            return <LinhaEmail content={email.content} subject={email.subject} recipient={`${email.sender.firstName} ${email.sender.lastName}`} initials={`${email.sender.firstName.substr(0, 1)}${email.sender.lastName.substr(0, 1)}`} isRead={email.read} />
        })
    }

    getNotifications() {
        MessageService.getNotifications(UsuarioService.getToken())
            .then((response) => {
                console.log(response.data)
                this.setState({
                    notifications: response.data
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                {ReactUtils.redirectBase()}
                <Header notifications={this.state.notifications} />
                <div className="dashboard-container">
                    <MenuLateral className="dashboard-menu-lateral" />
                    <div className="dashboard-emails-container">
                        <List className="dashboard-lista-emails">
                            {this.renderEmails()}
                        </List>
                        <EmailCreator />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
