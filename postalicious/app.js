const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const requestPromise = require('request-promise')
const sandBoxUrl = 'http://localhost:3000'

const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')))


app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/index.html'))
})

app.post('/', function(request, response) {
  const {host, method} = request.body

  console.log('=========>', request.body)

  const options = {
    method,
    uri: host,
    resolveWithFullResponse: true 
    // body: JSON.stringify(request.body)
  }

  requestPromise(options)
    .then(function(results) {
      response.status(200).json({results})
    })
    .catch(function(error) {
      response.status(500).json({
        error: error
      })
    })
})

// app.get('/construct_request', function(request, response) {
//   response.send(request.body)
// })

// user defines the kindof http request
// http represtened in the form in request.body
// ask the request promise library to make a request like with was exprssed in the reqeust.bodhy

app.listen(port)

module.exports = app
