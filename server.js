const express = require('express')
const exphbs = require('express-handlebars')
const { join } = require('path')
const server = express()

const routes = require('./routes')

// Serve static content for the app from the "public" directory in the application directory.
server.use(express.static(join(__dirname, 'public')))

// Parse application body
// urlencoded lets you utilize nested json
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// specifying the engine where we will be doing the server side rendering
server.set('view engine', 'handlebars')

server.use(routes)

server.listen(3000, () => {
  console.log('server listening on port: 3000')
})
