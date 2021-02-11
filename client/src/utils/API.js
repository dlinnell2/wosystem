import axios from 'axios';

export default {
    getAll: (type) => {
        return axios.get(`/api/${type}/getAll`)
    },

    add: (type, data) => {
        return axios.post(`/api/${type}/add`, data)
    },

    getOne: (type, id) => {
        return axios.get(`/api/${type}/getOne/` + id)
    },

    editOne: (type, id, data) => {
        return axios.put(`/api/${type}/` + id, data)
    },

    getMany: (type, data) => {
        return axios.post(`/api/${type}/getMany`, data)
    }
}