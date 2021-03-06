import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { Logo } from '../../assets/images';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { MessageService, UsuarioService } from '../../services';
import { Redirect } from 'react-router-dom';
import CONFIG from '../../config';

import './Header.css'

const ENTER_KEY = 13;

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            notifications: 0,
            search: "",
            redirectToLogin: false,
            emails: []
        }
    }

    componentDidMount() {
        this.getNotifications()
        this.getEmails()
    }

    getEmails = () => {
        MessageService.getEmails(UsuarioService.getToken(), this.state.search, true, false)
            .then((response) => {
                this.setState({
                    emails: response.data
                })
                this.props.emails(this.state.emails)
            })
    }

    getNotifications = () => {
        MessageService.getNotifications(UsuarioService.getToken())
            .then((response) => {
                this.setState({
                    notifications: response.data
                })
            })
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.getEmails()
        }
    }

    logout = () => {
        UsuarioService.deletarUsuarioLogado()
       
        this.setState({
            redirectToLogin: true
        })
    }

    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to={CONFIG.URL.PUBLIC.LOGIN} />
        }
        return (
            <AppBar emails={this.props.emails} position="static" color="default">
                <Toolbar className="header-container">
                    <div className="header-logo-container">
                        <img className="header-logo" src={Logo} />
                        <TextField
                            name="search"
                            onKeyDown={(e) => this.handleKeyDown(e)}
                            onChange={this.handleChange}
                            id="outlined-bare"
                            placeholder="Digite e pressione ENTER para pesquisar"
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
                        <IconButton color="inherit" onClick={this.logout}>
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
