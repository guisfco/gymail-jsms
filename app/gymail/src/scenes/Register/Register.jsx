import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { Logo } from '../../assets/images';
import Grid from '@material-ui/core/Grid';
import CONFIG from '../../config';

import '../Login/Login.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            lastName: "",
            showPassword: false,
            mustRedirectToLogin: false,
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleClickShowPassword = (event) => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    ChangeRedirectToLoginState = () => {
        this.setState({
            mustRedirectToLogin: !this.state.mustRedirectToLogin
        })
    }

    render() {
        const { showPassword, mustRedirectToLogin } = this.state
        if (mustRedirectToLogin) {
            return <Redirect to={CONFIG.URL.LOGIN} />
        } else {
            return (
                <Container maxWidth="sm">
                    <Typography component="div" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img className="login-logo" src={Logo} />
                        <TextField
                            className="login-input"
                            variant="outlined"
                            type="text"
                            label="Nome"
                            name="name"
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        <TextField
                            className="login-input"
                            variant="outlined"
                            type="email"
                            label="Sobrenome"
                            name="lastName"
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        <TextField
                            className="login-input"
                            variant="outlined"
                            type="email"
                            label="Email"
                            name="email"
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        <TextField
                            className="login-input"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            label="Senha"
                            name="password"
                            onChange={this.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={this.handleClickShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button
                                    onClick={this.ChangeRedirectToLoginState}
                                    className="login-button login-button-cancel"
                                    variant="outlined">
                                    Cancelar
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    className="login-button"
                                    variant="outlined">
                                    Cadastrar
                                </Button>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            )
        }
    }
}
