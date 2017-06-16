var events = require('events')
var eventEmitter = new events.EventEmitter()

//  Creating an event handler
var screamEvenHandler = () => {
  console.log('I hear ice SCREAM!!!')
}

//  Assign the event handler to an event
eventEmitter.on('scream', screamEvenHandler)

//  Fire the 'scream' event
eventEmitter.emit('scream')
