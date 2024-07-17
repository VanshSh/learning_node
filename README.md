  ## To get ENV variables directly without another package
  - `node --env-file=.env myfirst.js`

  ## To get ENV variables using dotenv
    
  - install dotenv package
   
   ```
  import dotenv from 'dotenv'
  import express from 'express'
  const app = express()

  const envVariables = dotenv.config()
  const PORT = process.env.PORT || 5000
  console.log('😇 L-6 in index.js=> ', envVariables.parsed.PORT)
  console.log('😇 L-8 in index.js=> ', PORT)
  
   ```

   ## To watch the node file changes

   ```
  "scripts": {
    "start": "node --watch index.js"
    },
   ```

   ## To validate the input field , params , query in the request 
  - Use the [Express validator package](https://www.javascripttutorial.net/nodejs-tutorial/express-validation/).

  ## Connect to MongoDB using mongoose

  ```
// ===> Using Mongoose <===

mongoose.set('strictQuery', false)
mongoose.connect(url)
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
const note = new Note({
  content: 'TS Is easy',
  important: true,
})
note.save().then((result) => {
  console.log('note saved!', result)
  mongoose.connection.close()
})

```

## Connect to MongoDB using MongoDB

```
import { MongoClient } from 'mongodb'

 MongoClient.connect(url)
  .then((client) => {
    console.log('Database created!')
    client.close()
  })
  .catch((err) => {
    console.log('Error: ', err)
  })


```

