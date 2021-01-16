/*
The Javascript classes which inherit from Event Emitter in Node.js,
generally are a source of different event/events collection in our apps.
With those classes we can listen in the .on() function on the object for the
event that was specified in the arguments and work accordingly with the callback
 function codes.
 */

var util = require('util');
var str = '';

util.inherits(myEventEmitterClass, EventEmitter);

myEventEmitterClass.prototype.emittedMethod = function () {
  console.log('Before the emittedMethod');
  this.emit('emittedevent');
  console.log(After the emittedMethod);
};

someObject.on('dataReceived', function(data) {
    dataReceived += data;
  })
  .on('end', function() {
    console.log('The data received: ' + data);
  })
