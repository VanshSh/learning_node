console.log('😇 Running fsDemo..')
// import fs from 'fs'
import fs from 'fs/promises'

// readFile() Callback method
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log('😇 Callback file data ', data)
// })

// readFileSync() Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log('😇 Sync file data ', data)

//  Promise file data

fs.readFile('./test.txt', 'utf8')
  .then((data) => console.log('😇 Promise version file data', data))
  .catch((err) => console.log(err))
