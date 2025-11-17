const http = require('http')
const fs = require('fs')
const PORT = 5000
// const server = http.createServer((req, res) => {
//     if (req.url == '/' && req.method == 'GET') {
//         fs.readFile('./home.html', 'utf-8', (err, data) => {
//             res.end(data)
//         })
//     }
// })

const server = http.createServer((req, res) => {
    if (req.url == '/api' && req.method == 'GET') {
        const data = {
            messsage: "Hello Node JS API Test",
            date : new Date()
        }
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(data))
    }
})

server.listen(PORT, () => {
    console.log("Server run in http://localhost:5000/");
})