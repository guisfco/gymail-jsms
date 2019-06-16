import axios from 'axios';
import CONFIG from '../config';
export default class UsuarioService {

    registrar(usuario) {
        return axios.post(`${this.baseUrl}/user`, usuario)
    }

    static entrar(usuario) {
        return axios.post(`${CONFIG.URL.BASE}/public/auth`, usuario)
    }

    static salvarUsuarioLogado(token, usuario) {
        localStorage.setItem(CONFIG.CONSTANTES.TOKEN, token)
        localStorage.setItem(CONFIG.CONSTANTES.USUARIO_INFO, JSON.stringify(usuario))
    }

    static getToken() {
        return localStorage.getItem(CONFIG.CONSTANTES.TOKEN)
    }

    getUsuarioInfo() {
        return JSON.parse(localStorage.getItem(this.USUARIO_INFO))
    }

    deletarUsuarioLogado() {
        localStorage.removeItem(this.TOKEN_KEY)
        localStorage.removeItem(this.USUARIO_INFO)
    }

}