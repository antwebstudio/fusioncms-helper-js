
export default {
    data() {
        return {
            meta: {},
            loading: false,
        }
    },
    methods: {
        processApi(api, table) {
            api = this.parseApi(api, table)
            this.loading = true
            axios[api.method](api.url).then((response) => {
                this.loading = false
                console.log('loaded')
            }).then((response) => this.parse(api.success)).catch((error) => {
                this.loading = false
                toast('Error: ' + error.response.data.message, 'failed')
            })
        },
        parseApi(api, table) {
            return {
                method: api.method,
                url: this.parse(api.url, table),
                success: eval(api.success),
            }
        },
        parseLabel(label, table) {
            return this.parse(label, table)
        },
        parse(functionOrValue, table, defaultValue) {
            try {
                functionOrValue = eval(functionOrValue)
            } catch (ex) {

            }

            if (typeof(functionOrValue) == "function") {
                return functionOrValue(table)
            } else {
                return typeof(functionOrValue) == 'undefined' ? defaultValue : functionOrValue;
            }
        },
    }
}