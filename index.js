////////// require npm install //////////
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

////////// require other file follow path //////////
var Model = require('./models/iot/iot.js')
var login = require('./models/login/login.route.js')

////////// variable function express //////////
var app = express()

////////// connect mongoDB name "iot" //////////
mongoose.connect('mongodb://localhost/iot')

//////////  show index in folder public //////////
app.use(express.static('public'))

////////// send data between back-end and front-end //////////
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

////////// require from /route/api //////////
app.use('/api', require('./route/api'))

////////// require api/login //////////
app.use('/api/login', login)

////////// insert in root //////////
app.post('/', function (req, res) {
  var obj = new Model(req.body)
  obj.save(function (err, obj) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(obj)
    }
  })
})

/*app.get('/', function (req, res) {
  Model.find({}).exec(function (err, results) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
})*/

////////// delete in /api/iot //////////
app.delete('/api/iot/:id', function (req, res ){
   Model.findById(req.params.id, function (err, iot) {
   Model.remove(function (err) {
      if (!err) {
        console.log("removed")
          return res.send('')
      } else {
        console.log(err)
      }
    })
  })
})

////////// use port 3000 to run node //////////
app.listen(3000)
console.log('run in port 3000')
