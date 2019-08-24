const fs = require('fs');

const filesSync = fs.readdirSync('./');
console.log(filesSync);

const files = null;
fs.readdir('./',(err,files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

const filesError = null;
fs.readdir('$',(err,files) => {
    if (err) console.log('Error', err);
    else console.log('Result', filesError);
});