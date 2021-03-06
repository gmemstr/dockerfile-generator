const fs = require('fs')
const path = require('path')

const Validator = require('jsonschema').Validator
const v = new Validator()

const dockerProcessor = require(path.join(__dirname, '/dockerProcessor'))
const Schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../schema.json')))

function generateDockerFileFromJSON (inputJSON) {
    let validationResult = v.validate(inputJSON, Schema)
    
    if (validationResult.errors.length !== 0) {
        throw Error('Input Validation error')
    }

    let resp = ''
    Object.keys(inputJSON).forEach(function (key) {
        let callableFunction = dockerProcessor.determineFunction(key)
        resp += callableFunction(inputJSON[key])
        resp += '\n'
    })

    return resp
}

function generateDockerFileFromArray (inputArray) {
    let resp = ''
    inputArray.forEach( (item) => {
        Object.keys(item).forEach(function (key) {
            let callableFunction = dockerProcessor.determineFunction(key)
            resp += callableFunction(item[key])
            resp += '\n'
        })
    })
    return resp
}

module.exports = {
    generateDockerFile: generateDockerFileFromJSON,
    generateDockerFileFromArray: generateDockerFileFromArray
}
