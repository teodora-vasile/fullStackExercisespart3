const express = require('express')
const app = express()
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const morgan = require('morgan')
app.use(express.json())
app.use(morgan('tiny'))
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const cors = require('cors')

require('dotenv').config()
const Person = require('./models/person')

const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url)

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
<<<<<<< Updated upstream

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

=======

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

>>>>>>> Stashed changes
  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})
<<<<<<< Updated upstream

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

<<<<<<< Updated upstream
const PORT = 8080
=======
const PORT = process.env.PORT || 3001
>>>>>>> Stashed changes
=======

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
  response.json(persons)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
})

const PORT = process.env.PORT || 3001
>>>>>>> Stashed changes
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})