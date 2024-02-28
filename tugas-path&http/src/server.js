const fs = require('fs');
const http = require('http');
const routes = require('./routes')

const port = 8080;

const server = http.createServer((req, res) => {
    routes(req, res, fs)
})

server.listen(port, () => {
    console.log(`Server running on ${port}`)
})
