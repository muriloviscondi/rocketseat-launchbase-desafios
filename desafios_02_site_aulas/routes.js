const express = require('express');

const routes = express.Router();

routes.get('/', function(request, response) {
  return response.render('home')
})

routes.get('/teachers', function(request, response) {
  return response.render('teachers')
})

routes.get('/students', function(request, response) {
  return response.render('students')
})

module.exports = routes;