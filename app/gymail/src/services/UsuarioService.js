import axios from 'axios'
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

    static getUsuarioInfo() {
        return JSON.parse(localStorage.getItem(CONFIG.CONSTANTES.USUARIO_INFO))
    }

    static deletarUsuarioLogado() {
        localStorage.removeItem(CONFIG.CONSTANTES.TOKEN)
        localStorage.removeItem(CONFIG.CONSTANTES.USUARIO_INFO)
    }

}