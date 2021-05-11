import React, { useState } from 'react'
import classes from './Form.module.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import PhoneBook from '../phoneBook/phoneBook'



function FormField(props) {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const[updateRender,setupdateRender] = useState(false)

    const handleName = (e) => {
        setNewName(e.target.value)
      }
      const handleNumber = (e) => {
        setNewNumber(e.target.value)
      }
    

      
 const addnoteToDb = (newPerson) => {
    axios.post('http://localhost:3001/api/persons',{person:newPerson})
    .then(res => toast.success(`${newPerson.name} added to PhoneBook`))
    .catch(err => toast.error("Name must be unique!"))
  }
  
    
//   toast.success(`${newPerson.name} added to PhoneBook`)

    const AddNumToList = (Name,Number) => {
      if(!Name || !Number){
        toast.error('Please input all fields');
      }else{
        const newPerson = {
          name:Name,
          number:Number
        }
        addnoteToDb(newPerson)
        setupdateRender(!updateRender)

        
    }
}
    

    return (
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
      <PhoneBook 
        updateRender={updateRender} />
      </section>
    )
}

export default FormField
