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

    static getEmails(token, keyword) {
        return axios.get(`${CONFIG.URL.BASE}/inbox`, {
            params: {
                deleted: false,
                keyword
            },
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }

}
