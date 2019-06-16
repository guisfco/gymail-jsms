import React, { Component } from 'react'
import { MenuLateral, Header, LinhaEmail } from '../../components'
import List from '@material-ui/core/List';

import './Dashboard.css'
import { ReactUtils, MessageService, UsuarioService } from '../../services';
import EmailCreator from '../EmailCreator/EmailCreator';

export default class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            notifications: 0
        }
    }

    componentDidMount() {
        this.getNotifications()
    }

    renderEmails() {
        return <LinhaEmail conteudo="ooooooi, tudo bem?" assunto="Almoço sábado" remetente="Yasmin Moraes" />
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
                    <List className="dashboard-lista-emails">
                        {this.renderEmails()}
                    </List>
                    <EmailCreator />
                </div>

            </React.Fragment>
        )
    }
}
