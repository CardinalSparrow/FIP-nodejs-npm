
// Demo 1: Hello World in Node.js
console.log("Hello, Node.js!");

// Demo 2: Basic Web Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Demo 3: Using npm package (lodash)
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
console.log("Reversed array:", _.reverse(numbers));

