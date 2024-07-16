import express from 'express'
import { matchedData, param, query, validationResult } from 'express-validator'

import { todos } from './todos.js'
const app = express()
// dotenv.config()
const PORT = process.env.PORT || 5000

// Define middleware to show the method and url of the request
const log = (req, res, next) => {
  console.log(`🛜 Request: {URL: ${req.url}, METHOD: ${req.method}} `)
  next()
}

// use middleware => we are writing it here because we want to use the middleware any request
app.use(log)

app.post('/login', (req, res) => {
  res.send('Authenticated....')
})

app.get('/', (req, res) => {
  res.send({ messgae: 'Hello API is Working..' })
})

app.get('/hi', query('name').notEmpty().escape(), (req, res) => {
  // validate data
  const result = validationResult(req)

  if (!result.isEmpty()) {
    res.status(400).send({ errors: result.array() })
  }
  // sanitize data
  const cleanedData = matchedData(req)

  res.send(`Hi, ${cleanedData.name}!`)
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
  const todoId = parseInt(req.params.id)
  const todo = todos.find((t) => t.id === todoId)

  if (todo) {
    res.status(200).json(todo)
  } else {
    res.status(404).json({ error: 'Todo not found' })
  }
})
app.get(
  '/api/todos/:id',
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const id = req.params.id
    res.send(`Fetching record with ID: ${id}`)
  }
)

app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT)
})
