const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password or password name number as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.f01bo.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Persons', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}
else if (process.argv.length > 3) {
  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({
    name: `${name}`,
    number: `${number}`,
  })
  person.save().then(result => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}