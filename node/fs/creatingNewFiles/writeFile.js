var fs = require('fs')

fs.writeFile('./node/fs/mynewfile3.txt', 'Hello der!', (err) => {
  if (err) throw err
  console.log('Saved')
})
