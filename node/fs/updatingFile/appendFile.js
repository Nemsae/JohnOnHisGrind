var fs = require('fs')
var text = '\n\nIDGAF'
fs.appendFile('./node/fs/mynewfile1.txt', text, function (err) {
  if (err) throw err
  console.log('Updated!')
})
