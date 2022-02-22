const path = require('path')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3001
const route = require('./routes')

// Middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})