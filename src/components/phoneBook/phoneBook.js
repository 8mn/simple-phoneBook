import React, { useState, useEffect} from 'react';
import classes from './phoneBook.module.css';
import {BiSearch,BiTrash} from "react-icons/bi";
import toast from 'react-hot-toast';
import axios from 'axios';



const PhoneBook = (props) => {
    const [ persons, setPersons ] = useState([]) 
    const[search,setsearch] = useState('')


    const handleDelete = (person) => {
      console.log(person.id)
      axios.delete(`http://localhost:3001/api/persons/${person.id}`)
      .then((res) => {
          toast.success(`${person.name} was successfully deleted`);
            console.log(res)
      })
      .catch(err => toast.error("Unknown error, Try again"))
    }
  
    const searchFilter = persons.filter(person => person.name.toLowerCase().startsWith(search))
    const personList = searchFilter.map((person) => 
      <li key={person.name}>
        {person.name}: {person.number}
        <button className={classes.delete} onClick={() => handleDelete(person)}><BiTrash /></button>
      </li>)
  
    useEffect(()=> {
      axios.get("http://localhost:3001/api/persons")
      .then(res => {setPersons(res.data)})
      .catch(err => toast.error(err))
      // eslint-disable-next-line 
    },[props.updateRender])
  


    return (
        <div className={classes.phoneNumberContainer}>
        <div className={classes.searchBar}>
          <input type="text" className={classes.search} 
                onChange={e => setsearch(e.target.value)}/>
          <BiSearch className={classes.searchIcon} />
        </div>
        <h2 className={classes.subHeading}>Numbers</h2>
        <div className={classes.phoneNumbers}>
        <ul>
          {personList}
        </ul>
        </div>
        </div>
    )
}

export default PhoneBook
