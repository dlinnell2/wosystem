import axios from 'axios';

export default {
    pullList: () => {
        return axios.get('api/db/getAll')
    },
}