import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './Components/validateMyExistence/validation'
import User from './Components/User'


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues, [name]: isChecked
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])



  return (
    <div>
      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} user={user} />
          )
        })
      }
    </div>
  );
}

export default App;
