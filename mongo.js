const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://phonebook1:${password}@cluster0.z9wt3qc.mongodb.net/phonebookapp1?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
const person = new Person({
 name: "vasa",
 number: "00192121"
})

 person.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
if (process.argv.length > 3){
mongoose
  .connect(url)
  .then((result) => {
    const person = new Person({
    name: name,
    number: number
     })
    return person.save()   
    })
    .then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    return mongoose.connection.close()
         })             
    .catch((err) => console.log(err))  
        } 

  else {
  mongoose
  .connect(url)
  .then(() => {
    console.log ('Phonebook:')
   Person
  .find({})
  .then((result) => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    return mongoose.connection.close()
  })
})  
  .catch((err) => console.log(err))  
}    
