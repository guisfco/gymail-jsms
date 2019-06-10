import React, { Component } from 'react'
import { MenuLateral, Header, LinhaEmail } from '../../components'
import List from '@material-ui/core/List';

import './Dashboard.css'

export default class Dashboard extends Component {

    renderEmails() {
        return <LinhaEmail conteudo="ooooooi, tudo bem?" assunto="Almoço sábado" remetente="Yasmin Moraes" />
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="dashboard-container">
                    <MenuLateral className="dashboard-menu-lateral" />
                    <List className="dashboard-lista-emails">
                        {this.renderEmails()}
                    </List>
                </div>

            </React.Fragment>
        )
    }
}
