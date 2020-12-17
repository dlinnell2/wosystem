import axios from 'axios';

export default {
    pullList: () => {
        return axios.get('api/db/getAll')
    },

    addNewWO: (data) => {
        return axios.post('api/db/addNewWO', data)
    },

    getOne: (data) => {
        return axios.get('api/db/getOne', {
            params: {
                id: data
            }
        })
    }
}