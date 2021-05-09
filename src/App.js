import classes from './App.module.css'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

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

    if(!Name || !Number){
      console.log("empty")
      toast.error('Please input all fields');
    }else{
      const newPerson = {
        name:Name,
        number:Number
      }
      // const newPerson = {Name,Number}
      console.log(newPerson)
      setPersons(persons.concat(newPerson))
      // toast(`${Name} added to PhoneBook`, {
      //   icon: '👏',
      // });
      toast.success(`${Name} added to PhoneBook`)
    }
  }



  return (
    <div className={classes.container}>
     <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
        className: '',
        style: {
          margin: '40px',
          background: 'black',
          color: '#fff',
          zIndex: 1,
        },
        duration: 5000,
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
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