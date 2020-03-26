const eventEmitter = require('events')
const mongoose = require('mongoose')

const mongoDbUrl = require('../../config/database')


global.connectedMongoEmitter = new eventEmitter();
global.db = mongoose.createConnection(mongoDbUrl.URL,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
db.on('connected', () => {
  console.log("Connected to DB ")
  connectedMongoEmitter.emit('connectedMongoDB')
});

db.on('error', function(err) {
  console.log('Mongoose connection error: ' + err)
})
// When the connection is disconnected
db.on('disconnected', function() {
  console.log('Mongoose connection disconnected')
})