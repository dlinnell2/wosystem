import axios from 'axios';

export default {
    pullList: () => {
        return axios.get('/api/db/getAll')
    },

    addNewWO: (data) => {
        return axios.post('/api/db/addNewWO', data)
    },

    getOne: (id) => {
        return axios.get('/api/db/detail/' + id)
    },

    editOne: (id, data) => {
        return axios.put('/api/db/detail/' + id, data)
    }
}