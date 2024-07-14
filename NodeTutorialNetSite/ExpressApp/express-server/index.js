import dotenv from 'dotenv'
import express from 'express'
import { todos } from './todos.js'
const app = express()

// Define middleware to show the method and url of the request
const log = (req, res, next) => {
  console.log(`🛜 Request: {URL: ${req.url}, METHOD: ${req.method}} `)
  next()
}
dotenv.config()

// use middleware => we are writing it here because we want to use the middleware any request
app.use(log)
const PORT = process.env.PORT || 5000

//

app.post('/login', (req, res) => {
  res.send('Authenticated....')
})

app.get('/', (req, res) => {
  res.send({ messgae: 'Hello API is Working..' })
})

app.get('/api/todos', (req, res) => {
  if (req?.query?.completed) {
    const isCompleted = req.query.completed === 'true'
    const filteredToDos = todos.filter((todo) => todo.completed === isCompleted)
    res.send(filteredToDos)
  } else {
    res.send(todos)
  }
})

app.get('/api/todos/:id', (req, res) => {
  const { id } = req.params // Extract ID from URL parameters

  const todoId = parseInt(id) // Convert ID to integer
  if (isNaN(todoId)) {
    return res.status(400).send(`Invalid id ${id}`) // Use return for clarity
  }

  const todo = todos.find((todo) => todo.id === todoId)
  if (todo) {
    return res.status(200).json(todo) // Send JSON response
  } else {
    return res.status(404).send(`Todo with id ${id} not found`)
  }
})
app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT)
})
