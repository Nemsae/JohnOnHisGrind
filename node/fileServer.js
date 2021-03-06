var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = `${__dirname}${q.pathname}`
  fs.readFile(filename, function(err, data) {
    console.log('data: ', data);
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// http.createServer((req, res) => {
//   var q = url.parse(req.url, true)
//   // var filename = `${__dirname}${q.pathname}`
//   var filename = `.${q.pathname}.html`
//   console.log('q.pathname: ', q.pathname, 'filename: ', filename );
//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'})
//       return res.end("404 Not Found")
//     }
//     console.log('data: ', data);
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(data)
//     return res.end()
//   })
// }).listen(8080)
