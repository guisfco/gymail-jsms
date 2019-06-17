export default {
    DEFAULT_HEADER: (token) => {
        return {
            'Content-Type': 'application/json',
            authorization: `${token}`
        }
    },
    URL: {
        BASE: "http://gymail-api.herokuapp.com/api/gymail",
        PUBLIC: {
            BASE: "/",
            LOGIN: "/",
            CADASTRO: "/registro"
        },
        PRIVATE: {
            BASE: "/dashboard",
            DASHBOARD: "/dashboard"
        },
    },
    CONSTANTES: {
        TOKEN: 'TOKEN',
        USUARIO_INFO: 'USUARIO_INFO'
    },
    MENSAGENS: {
        ENVIADO_SUCESSO: 'Email enviado com sucesso!',
        CADASTRO_SUCESSO: 'Cadastrado com sucesso!',
        EXCLUIDO_SUCESSO: 'Email excluído com sucesso!'
    }
}