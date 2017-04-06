const express = require('express')
const app = express()
const path = require('path')

console.log(__dirname);

app.use('/', express.static(path.join(__dirname)))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3001, function(){
  console.log('Listening on port 3001')
})
