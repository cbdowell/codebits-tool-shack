'use strict'

function readPackage(packageJson, context) {
    context.log('readPackage called...')
    return packageJson
}

module.exports = {
    hooks: {
        readPackage
    }
}
