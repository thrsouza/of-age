const express = require('express')
const nunjucks = require('nunjucks')

const { ageValidate } = require('./middlewares')
const { routes } = require('./router')

const app = express()

app.use(express.urlencoded({ extended: false }))

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

app.get('/', routes.form)
app.post('/check', routes.check)

app.get('/major', ageValidate, routes.major)
app.get('/minor', ageValidate, routes.minor)

module.exports = { app }
