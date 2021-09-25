
// import form from 'vuejs-form'

export default {
    data() {
        return {
            // form: form(),
            errorMessages: {}
        }
    },
    methods: {
        price(price, defaultValue) {
            if (price != null && price !== '') return parseFloat(price).toFixed(2)
            if (!_.isUndefined(defaultValue) && defaultValue != null && defaultValue != '') return price(defaultValue)
        },
        optional(value) {
            return this.defaultValue(value, {});
        },
        defaultValue(value, defaultValue) {
            return (typeof(value) != 'undefined' && value != null) ? value : defaultValue;
        },
        error(name, message) {
            this.errorMessages = {
                ...this.errorMessages,
                [name]: message,
            }
        },
        getError(name) {
            return _.first(this.errorMessages[name])
        },
        isUndefined(value) {
            return _.isUndefined(value)
        },
        dropdown(items, labelAttribute, valueAttribute) {
            if (_.isUndefined(items) || items == null) return []
            
            return Object.keys(items).map(key => {
                var item = items[key]
                return {label: item[labelAttribute], value: item[valueAttribute]}
            })
        },
        clone(object) {
            return JSON.parse(JSON.stringify(object))
        }
    },
    computed: {
        _() {
            return _
        },
        console() {
            return console
        },
    }
}