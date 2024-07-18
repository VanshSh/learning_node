import { MongoClient } from 'mongodb'

const url = process.env.W3SCHOOL_DB_URL
MongoClient.connect(url)
  .then((client) => {
    // Database => Collection => Document
    const dbo = client.db('mydb')
    const myObj = [
      { name: 'John', address: 'Highway 71' },
      { name: 'Peter', address: 'Lowstreet 4' },
      { name: 'Amy', address: 'Apple st 652' },
      { name: 'Hannah', address: 'Mountain 21' },
      { name: 'Michael', address: 'Valley 345' },
      { name: 'Sandy', address: 'Ocean blvd 2' },
      { name: 'Betty', address: 'Green Grass 1' },
      { name: 'Richard', address: 'Sky st 331' },
      { name: 'Susan', address: 'One way 98' },
      { name: 'Vicky', address: 'Yellow Garden 2' },
      { name: 'Ben', address: 'Park Lane 38' },
      { name: 'William', address: 'Central st 954' },
      { name: 'Chuck', address: 'Main Road 989' },
      { name: 'Viola', address: 'Sideway 1633' },
    ]

    // Use `dbo.collection` instead of `createCollection` (if necessary)
    const collection = dbo.collection('customers')

    // ===> Insert many customers
    // collection.insertMany(myObj, (err, res) => {
    //   console.log('Number of documents inserted: ' + res.insertedCount)
    //   client.close() // Close the connection after insertion
    // })

    // ===> Find one
    const findResult = collection
      .findOne()
      .then((res) => {
        console.log('😇 Find Result ', res)
      })
      .catch((err) => {
        console.log('😇 Find result err ', err)
      })

    // ==> Find selective
    const selectiveResult = collection
      .find({}, { projection: { _id: 0, name: 1 } })
      .toArray() // Use toArray to get the result as an array
      .then((res) => {
        console.log('😇 Find Result ', res)
      })
      .catch((err) => {
        console.log('😇 Find result err ', err)
      })
  })
  .catch((err) => {
    console.error('Error connecting to database:', err)
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
