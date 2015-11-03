;(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Model = require('./login.schema.js') /*testlogin*/

  router.get('/', function (req, res, next) {
    Model.find({}).exec(function (err, results) { //คำสั่งใน mongo
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })

  router.post('/', function (req, res, next) {
    var obj = new Model(req.body) //ตัวแปร obj
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
  })

  module.exports = router
})()