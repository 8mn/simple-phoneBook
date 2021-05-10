import classes from './App.module.css'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {BiSearch,BiTrash} from "react-icons/bi";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '9827163498'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const personList = persons.map((person) => <li key={person.name}>{person.name}: {person.number}<button className={classes.delete}><BiTrash /></button></li>)

  const handleName = (e) => {
    setNewName(e.target.value)
  }
  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }

  //todo
  // add a copy number icon
  // add a search bar
  // connect to db and backend



  const AddNumToList = (Name,Number) => {

    if(!Name || !Number){
      console.log("empty")
      toast.error('Please input all fields');
    }else{
      const newPerson = {
        name:Name,
        number:Number
      }
      console.log(newPerson)
      setPersons(persons.concat(newPerson))
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
          <button className={classes.Add} type="button" onClick={() => AddNumToList(newName,newNumber)}>Add</button>
        </div>
      </form>
      <div className={classes.phoneNumberContainer}>
      <div className={classes.searchBar}>
        <input type="text" className={classes.search} />
        <BiSearch className={classes.searchIcon} />
      </div>
      

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