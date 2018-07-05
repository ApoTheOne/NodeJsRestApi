let http = require('http');
let port = process.env.WEBPORT;
let httpModule = require('./api/httpRequestHandler');

http.createServer(httpModule.requestHandler).listen(port, '127.0.0.1');

console.log(`Server started listening on localhost at port ${port}`);
