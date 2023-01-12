let http = require('http');

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Mundo!');
});

server.listen(8000);
console.log("servidor ejecutandose en el puerto 8000");