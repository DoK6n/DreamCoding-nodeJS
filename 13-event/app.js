const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = args => {
  console.log('first callback - ', args);
};
const callback2 = args => {
  console.log('second callback - ', args);
};

emitter.on('ellie', callback1);

emitter.on('ellie', callback2);

emitter.emit('ellie', { message: 1 });
emitter.emit('ellie', { message: 2 });
emitter.removeListener('ellie', callback1);
// emitter.removeAllListeners();
emitter.emit('ellie', { message: 3 });

/** 콘솔창 결과
 * removeListener
    first callback -  { message: 1 }
    second callback -  { message: 1 }
    first callback -  { message: 2 }
    second callback -  { message: 2 }
    second callback -  { message: 3 }
 * 
  
 * removeAllListeners
    first callback -  { message: 1 }
    second callback -  { message: 1 }
    first callback -  { message: 2 }
    second callback -  { message: 2 }
 */
