import classes from './App.module.css'
import React from 'react'
import { Toaster } from 'react-hot-toast';
import FormField from './components/Form/FormField';


const App = () => {

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
      <FormField />
    </div>
  )
}

export default App