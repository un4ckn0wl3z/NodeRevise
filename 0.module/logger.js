const EventEmitter = require('events');
//console.log(__dirname);
//console.log(__filename);

var url = 'http://mylogger.io/log';
var id = 0;


class Logger extends EventEmitter {
    log(message) {
        // http req
        console.log(message);
        // Raise an event
        this.emit('LoggerEvent', { id: id+=1, url: url+`/${id}` });
    }
}
module.exports = Logger;