import axios from 'axios'
import CONFIG from '../config';

export default class MessageService {
    
    static sendEmail(token, data) {
        return axios.post(`${CONFIG.URL.BASE}/inbox`, data, {
            headers: CONFIG.DEFAULT_HEADER(token)
        })
    }
}
