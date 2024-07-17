import { MongoClient } from 'mongodb'

const url = process.env.W3SCHOOL_DB_URL

MongoClient.connect(url)
  .then((client) => {
    console.log('✅ Database created!')
    client.close()
  })
  .catch((err) => {
    console.log('Error ❌ ', err)
  })

// ===> Using Mongoose <===
// mongoose.set('strictQuery', false)
// mongoose.connect(url)
// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)
// const note = new Note({
//   content: 'TS Is easy',
//   important: true,
// })
// note.save().then((result) => {
//   console.log('note saved!', result)
//   mongoose.connection.close()
// })
