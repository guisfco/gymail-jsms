import axios from 'axios'
import CONFIG from '../config';
export default class UsuarioService {
    constructor() {
        this.TOKEN_KEY = 'TOKEN'
        this.USUARIO_INFO = 'USUARIO_INFO'
    }

    registrar(usuario) {
        return axios.post(`${this.baseUrl}/user`, usuario)
    }

    static entrar(usuario) {
        return axios.post(`${CONFIG.URL.BASE}/public/auth`, usuario)
    }

    static salvarUsuarioLogado(token, usuario) {
        localStorage.setItem(this.TOKEN_KEY, token)
        localStorage.setItem(this.USUARIO_INFO, usuario)
    }

    getToken() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    getUsuarioInfo() {
        return localStorage.getItem(this.USUARIO_INFO)
    }

    deletarUsuarioLogado() {
        localStorage.removeItem(this.TOKEN_KEY)
        localStorage.removeItem(this.USUARIO_INFO)
    }

}