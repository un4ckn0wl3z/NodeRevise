const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/names'){
        res.write(JSON.stringify(['John','Robert','Logan']));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('Incomming new connection...');
// });

server.listen(3000);

console.log('Listening on port 3000...');