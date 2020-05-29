const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

server.get('/', function(request, response) {
  return response.render('home')
})

server.get('/about', function(request, response) {
  return response.render('about')
})

server.get('/content', function(request, response) {
  return response.render('content')
})

server.listen(5000, function() {
  console.log('server is running!')
})