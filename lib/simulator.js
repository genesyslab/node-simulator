var replay = require('replay'),
    httpProxy = require('http-proxy'),
    express = require('express')

// expose createSimulator as the module
exports = module.exports = createSimulator();


function createSimulator() {
    return {
        express:express,
        httpProxy:httpProxy
    }
}
