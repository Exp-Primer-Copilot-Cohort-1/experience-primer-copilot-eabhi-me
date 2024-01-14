// Create web server
// Start server: node comments.js
// Test with: http://localhost:3000/comments?postId=1
// Test with: http://localhost:3000/comments?postId=2
// Test with: http://localhost:3000/comments?postId=3

// Import modules
var http = require('http');
var url = require('url');

// Define port
var port = 3000;

// Define data
var comments = {
    1: [{id: 1, author: 'Bob', text: 'Hello World'}],
    2: [{id: 2, author: 'John', text: 'Hi, how are you?'}],
    3: [{id: 3, author: 'Rob', text: 'Nice to meet you!'}]
};

// Create server
http.createServer(function (request, response) {
    // Parse request
    var parsedUrl = url.parse(request.url, true);
    var postId = parsedUrl.query.postId;
    var commentsForPost = comments[postId];

    // Set response header
    response.writeHead(200, {'Content-Type': 'application/json'});

    // Send response
    response.end(JSON.stringify(commentsForPost));
}).listen(port);

// Print URL
console.log('Server running at http://localhost:' + port + '/');