export default {
    data() {
        return {
            form: null,
            extension: {},
            collection: {},
        }
    },
    methods: {
        getForm(fieldset, entry) {

        }
    },
        
    computed: {
        fieldset() {
            if (this.extension.fieldset) {
                return this.extension.fieldset
            }
            if (this.collection.fieldset) {
                return this.collection.fieldset
            }
        },
        sections() {
            let body = []
            let sidebar = []

            if (this.extension.fieldset) {
                body = _.filter(this.extension.fieldset.sections, (section) =>
                    section.placement == 'body')

                sidebar = _.filter(this.extension.fieldset.sections, (section) =>
                    section.placement == 'sidebar')
            }

            return { body, sidebar }
        }
    }
}