var fs = require('fs')

fs.appendFile('./node/mynewfile1.txt', 'Hello mofucker!', (err) => {
  if (err) throw err
  console.log('Saved')
})
