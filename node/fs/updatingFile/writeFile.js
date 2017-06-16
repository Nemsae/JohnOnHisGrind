var fs = require('fs')
var text = 'Replaced the previous text with this.'

fs.writeFile('./node/fs/mynewfile3.txt', text, function (err) {
  if (err) throw err
  console.log('Updated!')
})
