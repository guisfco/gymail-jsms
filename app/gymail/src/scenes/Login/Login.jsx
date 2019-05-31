import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/images'

import './Login.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            senha: "",
            mostraSenha: false
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleClickMostraSenha = (event) => {
        this.setState({
            mostraSenha: !this.state.mostraSenha
        })
    }

    render() {
        const { mostraSenha } = this.state
        return (
            <Container maxWidth="sm">
                <Typography component="div" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img className="login-logo" src={Logo}/>
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
                        type={mostraSenha ? 'text' : 'password'}
                        label="Senha"
                        name="senha"
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        onClick={this.handleClickMostraSenha}>
                                        {mostraSenha ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />
                    <Button
                        className="login-button"
                        variant="outlined">
                        Entrar
                </Button>
                    <span className="login-span">
                        Ainda não possui conta?
                        <Link to='/' className="login-link">
                            Cadastre-se
                        </Link>
                    </span>
                </Typography>
            </Container>
        )
    }
}
