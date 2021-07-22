import axios from 'axios'

export default {
    endpoint: {
        forExtension: '/api/extensions/{extension}',
    },
    forExtension(extension) {
        console.log('for extension')
    }
}