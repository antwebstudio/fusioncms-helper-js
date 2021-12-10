let flattern = require('flat')
let _ = require('lodash')

function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

module.exports = {
    processLoadedEntry: function(entry) {
        return _.merge(flattern(entry), entry)
    },
}

