import { createServer } from 'http'
import { USER_DATA } from './DATA.js'
const PORT = process.env.PORT

const server = createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(USER_DATA))
    res.end()
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.write(JSON.stringify({ message: 'User not found.' }))
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`👂🏻 at port ${PORT}`)
})