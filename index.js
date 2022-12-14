const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())
app.use(morgan('tiny'))

let persons = [
        { 
          "id": 1,
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
]

morgan.token('data', function getData(request, response) 
{return JSON.stringify({name: request.body.name, number: request.body.number})})
app.use(morgan(':data'))

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person){ 
       response.json(person) 
       }
        else { 
             response.status(404).end() 
             }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
      return response.status(400).json({ 
        error: 'The name is missing' 
      })
    }
    if (!body.number) {
      return response.status(400).json({ 
        error: 'The number is missing' 
      })
    }
    let verifyName = persons.filter(person => body.name === person.name)
    if (verifyName.length !== 0 ) {
      return response.status(400).json({ 
        error: 'The name must be unique' 
      })
    }

    const person = {
      id: Math.floor(Math.random()*100000),
      name: body.name,
      number: body.number,
    }
    persons = persons.concat(person)
    response.json(person)
  })

 

app.get('/api/info', (request, response) => {
  let personsNumber = `Phonebook has info for ${persons.length} people. <br> ${new Date()}`
  
  response.send(personsNumber)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

