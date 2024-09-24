console.log('😇 Running fsDemo..')
// import fs from 'fs'
import fs from 'fs/promises'

const array = [1, 2, 3, 4]

// readFile() Callback method
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log('😇 Callback file data ', data)
// })

// readFileSync() Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log('😇 Sync file data ', data)
const newArr = [...array]

console.log('😇 L-16 in fsDemo.js=> ', newArr)
// Write file
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'hello I am writing to this file')
    console.log('written to the file')
  } catch (err) {
    console.log('😇 L-26 in fsDemo.js=> ', err)
  }
}

// Read file
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8')
    console.log('😇 L-19 in fsDemo.js=> ', data)
  } catch (err) {
    console.log('😇 L-30 in fsDemo.js=> ', err)
  }
}

writeFile().then(() => readFile())
