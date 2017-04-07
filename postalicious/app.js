const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const requestPromise = require('request-promise')
const sandBoxUrl = 'http://localhost:3000'

const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(path.join(__dirname)))


app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/index.html'))
})

app.post('/construct_request', function(request, response) {
  response.json(request.body)

  // user defines the kindof http request 
  // http represtened in the form in request.body 
  // ask the request promise library to make a request like with was exprssed in the reqeust.bodhy
  // 

  // const options = {
  //   // method: 'POST',
  //   // uri: `${sandBoxUrl}/somefile`,
  //   // body: JSON.stringify(request.body)
  //   method: request.body.method,
  //   uri: request.body.host,
  // }


  // requestPromise(options)
  //   .then(function(results) {
  //     response.json(results)
  //   })
  //   .catch(function(error) {
  //     response.status(500).json({
  //       error: error.message
  //     })
  //   })
})

app.listen(port)

module.exports = app
