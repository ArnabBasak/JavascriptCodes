var events = require('events');
var eventemmiter = new events.EventEmitter();

//create an event handler
var myEventHandler = function(){
    console.log('i m here to scream')
}

//Assign an event handler to event:
eventemmiter.on('scream',myEventHandler)

//fire the 'scream event'
eventemmiter.emit('look')