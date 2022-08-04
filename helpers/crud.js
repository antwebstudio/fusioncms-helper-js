import Form from '@/services/Form'
import crudMixin from 'fusioncms-helper-js/mixins/form'
import { processLoadedEntry } from 'fusioncms-helper-js/helpers/crud-helper'
import flatten from 'flat'

export { crudMixin }

export let sharedFormMixin = {
    props: {
        entry: {
            required: false
        },

        extension: {
            required: true,
        },

        form: {
            type: Object,
            required: true,
        }
    },
}

function init(vm, response, fields, dataCallback) {
    if (typeof(dataCallback) == 'function') {
        dataCallback(vm, response)
    } else {
        vm.extension = response.data.data.extension || {}
        vm.entry = response.data.data.entry || {}
    }

    fields = _.merge(fields, processLoadedEntry(vm.entry))

    if (vm.extension && vm.extension.fieldset) {
        _.forEach(vm.extension.fieldset.sections, function(section) {
            _.forEach(section.fields, function(field) {
                fields[field.handle] = vm.entry[field.handle] || null
            })
        })
    }

    if (vm.extension && vm.extension.blueprint) {
        _.forEach(vm.extension.blueprint.sections, function(section) {
            _.forEach(section.fields, function(field) {
                fields[field.handle] = vm.entry[field.handle] || null
            })
        })
    }

    vm.form = new Form(fields, true)
}

export function loadFormBeforeRouteEnter(fields, next) {
    next((vm) => {
        vm.form = new Form(fields, true)
    })
}

export function fieldsetToSection(fieldset) {
    let body = []
    let sidebar = []

    if (fieldset) {
        body = _.filter(fieldset.sections, (section) =>
            section.placement == 'body')

        sidebar = _.filter(fieldset.sections, (section) =>
            section.placement == 'sidebar')
    }


    return { body, sidebar }
}

export function loadCreateBeforeRouteEnter(url, next, fields, dataCallback) {
    axios.get(url).then((response) => {

        next((vm) => {
            init(vm, response, fields, dataCallback)
        })
    })
}

export function loadCreateBeforeRouteUpdate(url, next, fields, dataCallback) {
    axios.get(url).then((response) => {
        init(this, response, fields, dataCallback)
        
        next()
    })

}

export function loadEditBeforeRouteEnter(url, next, fields, dataCallback) {
    axios.get(url).then((response) => {

        next((vm) => {
            init(vm, response, fields, dataCallback)
        })
    })

}

export function loadEditBeforeRouteUpdate(url, next, fields, dataCallback) {
    axios.get(url).then((response) => {
        init(this, response, fields, dataCallback)
        
        next()
    })

}