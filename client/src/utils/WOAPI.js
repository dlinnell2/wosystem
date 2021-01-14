import axios from 'axios';

export default {
    getAll: () => {
        return axios.get('/api/wo/getAll')
    },

    add: (data) => {
        return axios.post('/api/wo/add', data)
    },

    getOne: (id) => {
        return axios.get('/api/wo/' + id)
    },

    editOne: (id, data) => {
        return axios.put('/api/wo/' + id, data)
    }
}