import axios from 'axios'
import queryString from 'query-string'

export default {
    endpoint: {
        search: '/datatable/collections/{collectionId}',
    },
    search(collectionId, searchString, params) {
        let url = this.endpoint.search.replace('{collectionId}', collectionId);
        if (typeof(params) == 'undefined') params = {}
        params = {
            ...params,
            search: searchString,
        }

        return axios.get(url + '?' + this.getQueryParameters(params))
    },
    
    getQueryParameters(params) {
        // let params = {
        //     sort:    (this.sort.order === 'desc' ? '-' : '') + this.sort.key,
        //     page:    this.pagination.currentPage,
        //     perPage: this.pagination.perPage,
        // }

        if (params.search !== '') {
            params['filter[search]'] = params.search
        }

        return queryString.stringify(params)
    },
}