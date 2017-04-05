const express = require('express')
const app = express()

app.get('/', function(request, response) {
  response.set('Content-Type', 'text/plain')
  response.send('Welcome to Sandbox!')
})

app.get('/search?q=doodads', function(request, response) {
  response.set('Content-Type', 'text/plain')
  response.send('You searched for: "doodads"')
})

app.get('/search', function(request, response){
  response.set('Content-Type', 'text/plain')
  response.status(400).send('You didn\'t provide a search query term :(')
})

app.post('/things', function(request, response) {
  response.set('Content-Type', 'text/plain')
  response.status(201).send('New things created: "flying car!"')
})

app.get('/somefile', function(request, response) {
  response.set('Content-Type', 'text/plain')
  response.status(200).send('This is a plain text file')
})

app.get('/someotherfile', function(request, response) {
  response.set('Content-Type', 'text/html')
  response.status(200).send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
})

app.get('/myjsondata', function(request, response){
  response.set('Content-Type', 'application/json')
  response.status(200).send({ 'title': 'some JSON data'})
})

app.get('/old-page', function(request, response) {
  response.setHeader('location','http://localhost:3000/newpage')
  response.status(301).send('Page is not available') 
})

app.get('/newpage', function(request, response) {
  response.send('Our new page')
})

app.post('/admin-only', function(request, response) {
  response.status(403).send('You are not an admin') 
})

app.get('/not-a-page', function(request, response) {
  response.status(404).send('Page aint found heifa') 
})

app.get('/server-error', function(request, response) {
  response.status(500).send('Internal server error') 
})

app.listen(3000, function(){
  console.log('Listening on port 3000')
})