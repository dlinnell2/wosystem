import axios from 'axios';

export default {
    checkDb: () => {
        return axios.get('api/db')
    },
    checkExpress: () => {
        return axios.get('api/hello')
    }
}