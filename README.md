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
