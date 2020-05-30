const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false
})

server.get('/', function (request, response) {
  return response.render('home')
})

server.get('/about', function (request, response) {
  const about = {
    url_img: 'https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg',
    url_description: 'Logo Rocketseat',
    title: 'Rocketseat',
    title_description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
    description: 'Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, utilizando como por exemplo:',
    list_techs: [
      {
        name: 'Javascript'
      },
      {
        name: 'ReactJS'
      },
      {
        name: 'React Native'
      },
      {
        name: 'NodeJs'
      },
    ],
    description_tech: 'Venha fazer parte dessa comunidade crescente chamada <a href="https://rocketseat.com.br/">Rocketseat</a>.',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/Rocketseat'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rocketseat_oficial/?hl=en'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/rocketseat'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/school/rocketseat'
      }
    ]
  }

  return response.render('about', { about })
})

server.get('/content', function (request, response) {
  return response.render('content', { items: courses })
})

server.listen(5000, function () {
  console.log('server is running!')
})