import axios from 'axios';

export default {
    getAll: (type) => {
        return axios.get(`/api/${type}/getAll`)
    },

    add: (type, data) => {
        return axios.post(`/api/${type}/add`, data)
    },

    getOne: (type, id) => {
        return axios.get(`/api/${type}/` + id)
    },

    editOne: (type, id, data) => 
    {
        console.log(data)
        return axios.put(`/api/${type}/` + id, data)
    },

    getMany: (type, details) => {
        return axios.get(`/api/${type}/getMany` + details)
    }
}