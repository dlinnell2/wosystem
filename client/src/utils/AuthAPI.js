import axios from 'axios';

export default {
    checkForUser: () => {
        return axios.get('/auth/loggedin', {withCredentials: true})
    },

    login: (data) => {
        return axios.post('/auth/login', data)
    },

    register: (data) => {
        return axios.post('/auth/register', data)
    }
}