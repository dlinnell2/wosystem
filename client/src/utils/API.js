import axios from 'axios';

export default {
    pullList: () => {
        return axios.get('api/db/getAll')
    },

    addNewWO : () => {
        console.log("client side api")
        return axios.post('api/db/addNewWO')
    }
}