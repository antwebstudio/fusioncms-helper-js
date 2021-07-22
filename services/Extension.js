import axios from 'axios'

export default {
    endpoint: {
        get: '/api/extensions/{extension}',
    },
    get(name) {
        let url = this.endpoint.get.replace('{extension}', name);

        return axios.get(url)
    }
}