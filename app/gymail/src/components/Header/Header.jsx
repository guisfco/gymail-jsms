import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { Logo } from '../../assets/images';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { MessageService, UsuarioService } from '../../services'

import './Header.css'

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            notifications: 0
        }

        
    }
    
    componentDidMount() {
        this.getNotifications()

    }

    getNotifications = () => {
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
            <AppBar position="static" color="default">
                <Toolbar className="header-container">
                    <div className="header-logo-container">
                        <img className="header-logo" src={Logo} />
                        <TextField
                            id="outlined-bare"
                            placeholder="Pesquisar..."
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            className="header-input" />
                    </div>
                    <div className="header-icones">
                        <IconButton color="inherit">
                            <Badge badgeContent={this.state.notifications} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <ExitIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
