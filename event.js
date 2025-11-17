const { EventEmitter } = require('events')

const mgmg = new EventEmitter;

mgmg.on('eat',(food)=>{
    console.log(`Hello , ${food}`);
})

mgmg.emit('eat','Coffee')


