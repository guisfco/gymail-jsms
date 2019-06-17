import axios from 'axios';
import CONFIG from '../config';
export default class UsuarioService {

    static registrar(usuario) {
        return axios.post(`${CONFIG.URL.BASE}/user`, usuario)
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

    static getUsuarios(token, keyword) {
        return axios.get(`${CONFIG.URL.BASE}/user`, {
            params: {
                keyword
            },
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }

    static deletarUsuarioLogado() {
        localStorage.removeItem(CONFIG.CONSTANTES.TOKEN)
        localStorage.removeItem(CONFIG.CONSTANTES.USUARIO_INFO)
    }

}