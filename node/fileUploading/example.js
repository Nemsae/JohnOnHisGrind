var http = require('http')
var formidable = require('formidable')
var fs = require('fs')

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      var oldpath = files.filetoupload.path
      // var oldpath = `C:${__dirname}${files.filetoupload.path}`
      console.log('oldpath: ', oldpath);
      var newpath = `${__dirname}/${files.filetoupload.name}`
      // var newpath = `C:${__dirname}/${files.filetoupload.name}`
      console.log('__dirname: ', __dirname);
      console.log('newpath: ', newpath);
      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err
        res.write('File uploaded!')
        res.end()
      })
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    //  Form html
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    return res.end()
  }
}).listen(8080)
