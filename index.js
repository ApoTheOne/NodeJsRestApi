let http = require('http');
var port = process.env.WEBPORT;

function handleRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Response ended');
    console.log('server responded.');
}

http.createServer(handleRequest).listen(port, '127.0.0.1');

console.log(`Server started listening on localhost at port ${port}`);
