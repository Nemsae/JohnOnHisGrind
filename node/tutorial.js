var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

var port = '8080'
var dt = require('./dateModule')

// console.log('__dirname: ', __dirname);
console.log(path.join(__dirname, './demofile1.html'))
http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, './demofile1.html'), (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(port)

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.write(`Date and time is: ${dt.myDateTime()}`)
//   // res.write(req.url)
//   res.end('Hello World!')
//   // console.log(`Listening on port: ${port}`)
// }).listen(port)
