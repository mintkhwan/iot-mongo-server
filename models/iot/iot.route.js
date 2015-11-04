var express = require('express')
var router = express.Router()

var iot = require('./iot.schema.js')

iot.methods(['get', 'put', 'post', 'delete'])
iot.register(router, '/iot')

module.exports = router
