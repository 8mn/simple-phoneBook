import classes from './App.module.css'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '9827163498'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const personList = persons.map((person) => <li key={person.name}>{person.name}: {person.number}</li>)

  const handleName = (e) => {
    setNewName(e.target.value)
  }
  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const AddNumToList = (Name,Number) => {
    const newPerson = {
      name:Name,
      number:Number
    }
    // const newPerson = {Name,Number}
    console.log(newPerson)
    setPersons(persons.concat(newPerson))
    console.log(persons)
  }



  return (
    <div className={classes.container}>
      <h1 className={classes.Heading}>Phonebook</h1>
      <section className={classes.phoneList}>
      <form>
        <div className={classes.NameInputContainer}>
          <span className={classes.Name}> Name:</span> 
          <input className={classes.NameInput}  onChange={handleName}/>
        </div>
        <div className={classes.PhoneInputContainer}>
          <span className={classes.Number}> Number:</span> 
          <input className={classes.NameInput} onChange={handleNumber} />
        </div>
        <div>
          <button type="button" onClick={() => AddNumToList(newName,newNumber)}>Add</button>
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