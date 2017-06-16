var fs = require('fs')

fs.open('./node/fs/mynewfile2.txt', 'w', (err) => {
  if (err) throw err
  console.log('Saved')
})
