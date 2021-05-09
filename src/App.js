import classes from './App.module.css'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 9827163498
  }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const personList = persons.map((person) => <li key={person.name}>{person.name}: {person.number}{console.log(person.name)}</li>)

  return (
    <div className={classes.container}>
      <h1 className={classes.Heading}>Phonebook</h1>
      <section className={classes.phoneList}>
      <form>
        <div className={classes.NameInputContainer}>
          <span className={classes.Name}> Name:</span> <input className={classes.NameInput} />
        </div>
        <div className={classes.PhoneInputContainer}>
          <span className={classes.Number}> Number:</span> <input className={classes.NameInput} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <div className={classes.phoneNumberContainer}>
      <h2 className={classes.subHeading}>Numbers</h2>
      <div className={classes.phoneNumbers}>
      <ul>
        {personList}
      </ul>
      </div>
      </div>
      </section>
    </div>
  )
}

export default App