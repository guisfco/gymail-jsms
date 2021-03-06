import axios from 'axios'
import CONFIG from '../config';

export default class MessageService {

    static sendEmail(token, data) {
        return axios.post(`${CONFIG.URL.BASE}/inbox`, data, {
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }

    static getNotifications(token) {
        return axios.get(`${CONFIG.URL.BASE}/inbox/notifications`, {
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }

    static getEmails(token, keyword, read, deleted) {
        return axios.get(`${CONFIG.URL.BASE}/inbox`, {
            params: {
                deleted,
                read,
                keyword
            },
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }

    static deleteEmail(token, id) {
        return axios.delete(`${CONFIG.URL.BASE}/inbox/${id}`, {
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }

    static getEmail(token, id) {
        return axios.get(`${CONFIG.URL.BASE}/inbox/${id}/detail`, {
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }
}
