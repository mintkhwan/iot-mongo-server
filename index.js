var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/iot')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', require('./route/api'))

app.listen(3000)
console.log('run in 3000')
