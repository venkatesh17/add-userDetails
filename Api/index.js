global.appPath = __dirname
global.BasicResponse = require('./Utilities/ResponseBody')
require('./Globals')
const express = require('express')
const eventEmitter = require('events')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./Routes')
const app = express()



global.serverup = new eventEmitter()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/chatbot', routes)

httpServer = require('http').createServer(app)

httpServer.listen(process.env.PORT || 3000, () => {
  connectedMongoEmitter.on('connectedMongoDB', () => {
    console.log('server listening on Port 3000')
  })
})

//module.exports = httpServer
