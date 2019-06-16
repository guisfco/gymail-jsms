import React from 'react';
import UsuarioService from "./UsuarioService";
import CONFIG from "../config";
import { Redirect } from 'react-router-dom';

export default class ReactUtils {

    /**
     * 
     * Definir aqui as URLs públicas que não necessitam de autenticação.
     * 
     */
    static _public_paths = [
        CONFIG.URL.PUBLIC.LOGIN,
        CONFIG.URL.PUBLIC.CADASTRO
    ]

    /**
     * 
     * Verifica se é necessário redirecionar para a rota base (pública/privada), caso sim, redireciona.
     * 
     */
    static redirectBase() {
        if (!this._isAuthenticated() && !this._isPublicPathActive()) {
            return <Redirect to={CONFIG.URL.PUBLIC.BASE} exact />
        }
        if (this._isAuthenticated() && this._isPublicPathActive()) {
            return <Redirect to={CONFIG.URL.PRIVATE.BASE} exact />
        }
    }

    /**
     * 
     * Verifica se o usuário possui os requisitos mínimos para estar autenticado.
     *      Se sim => return true
     *      Se não => return false
     * 
     */
    static _isAuthenticated() {
        if (UsuarioService.getToken() &&
            UsuarioService.getUsuarioInfo()) {
            return true
        }
        return false
    }

    /**
     * 
     * Verifica se o usuário está em algums dos paths públicos inseridos na variável <public_paths>.
     *      Se sim => return true
     *      Se não => return false
     * 
     */
    static _isPublicPathActive() {
        if (this._public_paths.includes(window.location.pathname)) {
            return true
        }
        return false
    }
}