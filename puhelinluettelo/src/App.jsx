// import { useState, useEffect } from 'react'
// import personService from './services/persons'
// import './index.css'

// const Filter = (props) => {
// 	return (
// 		<form onSubmit={props.add}>
// 			<div>
// 				 filter shown with<input value={props.new}
// 				 onChange={props.change} />
// 	  		 </div> 
// 		 </form>
// 	)
// }

// const PersonForm = (props) => {
// 	return (
// 		<form onSubmit={props.add}>
//         	<div>
//             	name: <input value={props.name}
// 		    	onChange={props.nameChange} />
//           	</div>
// 		  	<div>
// 		    	number: <input value={props.number}
// 		    	onChange={props.numberChange} />
// 		  	</div>
//           	<div>
//             	<button type="submit">add</button>
//           	</div>
//         </form>
// 	)
// }

// const Persons = ({ name, number, deletePerson }) => {
//   return (
// 	<p>
// 	  {name} {number} <button onClick={deletePerson}>delete</button> 
//    	</p>
//   )
// }

// const Notification = ({ message }) => {
// 	if (message === null)
// 	{
// 		return null
// 	}

// 	return (
// 		<div className='notification'>
// 			{message}
// 		</div>
// 	)
// }

// const Error = ({ message }) => {
// 	if (message === null)
// 	{
// 		return null
// 	}

// 	return (
// 		<div className='error'>
// 			{message}
// 		</div>
// 	)
// }

// const App = () => {
//   const [persons, setPersons] = useState([])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [newFilter, setNewFilter] = useState('')
//   const [newNotification, setNotification] = useState(null)
//   const [newError, setError] = useState(null)

//   useEffect(() => {
// 	personService
// 		.getAll()
// 		.then(response => setPersons(response))
//   }, [])

//   const updatePerson = (person) => {
//     const changedPerson = { ...person, number: newNumber }
//     personService
//       .update(changedPerson, person.id)
//       .then(response => {
//         setNotification(`Updated contact ${person.name}`)
//         setTimeout(() => {
//           setNotification(null)
//         }, 4000)
//         setPersons(persons.map(p => p.id !== person.id ? p : response))
//       })
//       .catch(error => {
//         setError(`the person '${person.name}' was already deleted from server`)
//         setTimeout(() => {
//           setError(null)
//         }, 4000)
//         setPersons(persons.filter(n => n.id !== person.id))
//       })
//     setNewName('')
//     setNewNumber('')
//   }

//   const addPerson = () => {
//     const phonebookObject = {
//       name: newName,
//       number: newNumber,
//     }
//     console.log('helloo')
//     personService
//     .create(phonebookObject)
//     .then(response => {
//       setNotification(`Added ${newName}`)
//       setTimeout(() => {
//         setNotification(null)
//       }, 4000)
//       setPersons(persons.concat(response))
//         setNewName('')
//         setNewNumber('')
//     })
//     .catch(error => {
//       console.log('Error caught')
//       setError(`Error ${error.response.status}: ${error.response.data.error || error.message}`)
//       setTimeout(() => {
//         setError(null)
//       }, 4000)
//       setNewName('')
//       setNewNumber('')
//     })
//   }

//   const	handleSubmit = (event) => {
//     event.preventDefault()
//     const person = persons.find(person => person.name === newName)

//     if (person) {
//       if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
//         updatePerson(person)
//     }
//     else
//       addPerson()
//   }

//   const deleteThisPerson = (person) => {
//     if (window.confirm(`Delete ${person.name} ?`))
//     {
//       personService
//         .remove(person.id)
//         .then(response => {
//           setPersons(persons.filter(n => n.id !== person.id))
//           setNotification(`Deleted ${person.name}`)
//           setTimeout(() => {
//             setNotification(null)
//           }, 4000)
//         })
//     }
//     setNewName('')
//     setNewNumber('')
//   }

//   const addFilter = (event) => {
//     event.preventDefault()
//     setNewFilter('')
//   }
//   const personsToShow = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

//   const handleFilterChange = (event) => setNewFilter(event.target.value)
//   const handleNameChange = (event) => setNewName(event.target.value)
//   const handleNumberChange = (event) => setNewNumber(event.target.value)

//   return (
//     <div>
//       <h2>Phonebook</h2>
// 	  <Notification message={newNotification} />
// 	  <Error message={newError} />
// 	  <Filter add={addFilter} filter={newFilter} change={handleFilterChange} />
// 	  <h3>add a new</h3>
// 	  <PersonForm name={newName} number={newNumber} add={handleSubmit}
// 	  nameChange={handleNameChange} numberChange={handleNumberChange} />
//       <h3>Numbers</h3>
// 	 	{personsToShow.map(person =>
// 	    <Persons 
// 		  key={person.name}
// 		  name={person.name}
// 		  number={person.number}
// 		  deletePerson={() => deleteThisPerson(person)}
// 	    />
// 	  )}
//    </div>
// )}

// export default App

import { useState, useEffect } from 'react'
import personService from './services/persons'
import './index.css'

const Filter = (props) => {
	return (
		<form onSubmit={props.add}>
			<div>
				 filter shown with<input value={props.new}
				 onChange={props.change} />
	  		 </div> 
		 </form>
	)
}

const PersonForm = (props) => {
	return (
		<form onSubmit={props.add}>
      <div>
        name: <input value={props.name}
        onChange={props.nameChange} />
      </div>
      <div>
        number: <input value={props.number}
        onChange={props.numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
	)
}

const Persons = ({ name, number, deletePerson }) => {
  return (
	<p>
	  {name} {number} <button onClick={deletePerson}>delete</button> 
   	</p>
  )
}

const Notification = ({ message }) => {
	if (message === null)
	{
		return null
	}

	return (
		<div className='notification'>
			{message}
		</div>
	)
}

const Error = ({ message }) => {
	if (message === null)
	{
		return null
	}

	return (
		<div className='error'>
			{message}
		</div>
	)
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNotification, setNotification] = useState(null)
  const [newError, setError] = useState(null)

  useEffect(() => {
	personService
		.getAll()
		.then(response => setPersons(response))
  }, [])

  const updatePerson = (person) => {
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(changedPerson, person.id)
      .then(response => {
        setNotification(`Updated contact ${person.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 4000)
        setPersons(persons.map(p => p.id !== person.id ? p : response))
      })
      .catch(error => {
        setError(`the person '${person.name}' was already deleted from server`)
        setTimeout(() => {
          setError(null)
        }, 4000)
        setPersons(persons.filter(n => n.id !== person.id))
      })
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const person = persons.find(person => person.name === newName)

    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
      updatePerson(person)
    } else {
      const phonebookObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(phonebookObject)
        .then(response => {
          setNotification(`Added ${newName}`)
          setTimeout(() => {
            setNotification(null)
          }, 4000)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
      })
      .catch(error => {
        console.log(error.response.data)
        setError(`Error: '${error.response.data.error}'`) 
        setTimeout(() => {
          setError(null)
        }, 4000)
      })
    }
  }

  const deleteThisPerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`))
    {
      personService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(n => n.id !== person.id))
          setNotification(`Deleted ${person.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 4000)
        })
    }
  }

  const addFilter = (event) => {
    event.preventDefault()
    setNewFilter('')
  }
  const personsToShow = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleFilterChange = (event) => setNewFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
	  <Notification message={newNotification} />
	  <Error message={newError} />
	  <Filter add={addFilter} filter={newFilter} change={handleFilterChange} />
	  <h3>add a new</h3>
	  <PersonForm name={newName} number={newNumber} add={addPerson}
	  nameChange={handleNameChange} numberChange={handleNumberChange} />
      <h3>Numbers</h3>
	 	{personsToShow.map(person =>
	    <Persons 
		  key={person.name}
		  name={person.name}
		  number={person.number}
		  deletePerson={() => deleteThisPerson(person)}
	    />
	  )}
   </div>
)}

export default App