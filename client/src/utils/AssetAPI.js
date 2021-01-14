import axios from 'axios';

export default {
    getAll: () => {
        return axios.get('/api/asset/getAll')
    },

    add: (data) => {
        return axios.post('/api/asset/add', data)
    },

    getOne: (id) => {
        return axios.get('/api/asset/' + id)
    },

    editOne: (id, data) => {
        return axios.put('/api/asset/' + id, data)
    }
}