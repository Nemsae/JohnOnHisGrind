var fs = require('fs')

fs.unlink('./node/fs/mynewfile2.txt', (err) => {
  if (err) throw err
  console.log('File deleted!')
})
