var fs = require('fs')

//  renames and moves
//  fs.rename('./node/fs/mynewfile2.txt', 'renamedfile2.txt', (err) => {
fs.rename('./node/fs/mynewfile2.txt', './node/fs/renamedfile2.txt', (err) => {
  if (err) throw err
  console.log('File renamed!')
})
