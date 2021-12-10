import queryString from 'query-string'

export default {
    data() {
        return {
            perPage: 10,
            loading: true,
            displayable: [],
            appendable: [],
            column_names: [],
            sortable: [],
            records: [],
            search: '',

            pagination: {
                totalRecords: 0,
                currentPage: 1,
                totalPages: 0,
                perPage: this.perPage,
            },

            sort: {
                key: '',
                order: 'asc',
            },
        }
    },
    watch: {
        endpoint() {
            this.getRecords()
        },

        search: _.debounce(function(value) {
            this.pagination.currentPage = 1

            this.getRecords()
        }, 300)
    },
    computed: {
        deleteModalName() {
            return 'delete-' + this.name
        }
    },
    methods: {
        refreshDataTable(name) {
            bus().$emit('refresh-datatable-' + name)
        },
        getQueryParameters(params) {
            params = {
                sort:    (this.sort.order === 'desc' ? '-' : '') + this.sort.key,
                page:    this.pagination.currentPage,
                perPage: this.pagination.perPage,
                append: this.appendable.join(','),
                ...params,
            }

            if (this.search !== '') {
                params['filter[search]'] = this.search
            }

            return queryString.stringify(params)
        },
        getRecords(params) {
            this.loading = true

            return axios.get(`${this.endpoint}?${this.getQueryParameters(params)}`).then((response) => {
                this.records = response.data.records.data
                this.displayable = response.data.displayable
                this.sortable = response.data.sortable
                this.appendable = response.data.appendable || []
                this.column_names = response.data.column_names
                this.pagination.totalRecords = response.data.records.total
                this.pagination.totalPages = response.data.records.last_page

                this.loading = false

                return response;
            })
        },
    }
}