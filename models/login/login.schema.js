;(function () {
  'use strict'
  var modelName = 'login'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    email: String
  })

  module.exports = mongoose.model(modelName, schema)
})()
