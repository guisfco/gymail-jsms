export default {
    DEFAULT_HEADER: (token) => {
        return {
            'Content-Type': 'application/json',
            authorization: `${token}`
        }
    },
    URL: {
        BASE: "http://gymail-api.herokuapp.com/api/gymail",
        LOGIN: "/",
        CADASTRO: "/registro"
    },
    CONSTANTES: {
        TOKEN: 'TOKEN',
        USUARIO_INFO: 'USUARIO_INFO'
    },
    MENSAGENS: {
        ENVIADO_SUCESSO: 'Email enviado com sucesso!'
    }
}