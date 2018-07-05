function handleGetRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Get action request.');
}

function handlePostRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Post action request.');
}

function handlePutRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Put action request.');
}

function handleDeleteRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Delete action request.');
}

exports.requestHandler = function(request, response) {
    switch (request.method) {
        case 'GET':
            handleGetRequest(request, response);
            break;
        case 'POST':
            handlePostRequest(request, response);
            break;
        case 'PUT':
            handlePutRequest(request, response);
            break;
        case 'DELETE':
            handleDeleteRequest(request, response);
            break;
        default:
            handleBadRequest(request, response);
            break;
    }
    console.log('Request processing completed');
};
