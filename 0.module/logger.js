console.log(__dirname);
console.log(__filename);

var url = 'http://mylogger.io/log';
function log(message){
    // http req
    console.log(message);
}

module.exports = log;