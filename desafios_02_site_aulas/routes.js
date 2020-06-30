const express = require('express');

const routes = express.Router();

routes.get('/', function(request, response) {
  return response.render('home')
})

routes.get('/teachers', function(request, response) {
  return response.render('teachers/index')
})

routes.get('/teachers/create', function(request, response) {
  return response.render('teachers/create')
})

routes.get('/students', function(request, response) {
  return response.render('students/index')
})

module.exports = routes;