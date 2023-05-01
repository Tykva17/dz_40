const http = require('http');
const hostname = '127.0.0.1';
const port = 8199;

const someArr = [{id: 1, old: 1}, {id: 2, old: 2}, {id: 3, old: 3}, {id: 4, old: 4}];
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    if(req.url == '/users'){
        res.writeHead(200);
        res.write(JSON.stringify(someArr));
        res.end();
    }else {
        res.writeHead(200);
        res.write('Hello World!');
        res.end();
    }
}

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});