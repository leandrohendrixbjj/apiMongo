const http = require('http');
const port = 3000;

const route = {
    '/':'Welcome to main',
    '/livros': 'Welcome to livro list',
    '/autores': 'Welcome to autores list',
    '/precos': 'Welcome to Preços'
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(route[req.url]);
});

server.listen(port, () => {
    console.log('Server is running at 3000');
});