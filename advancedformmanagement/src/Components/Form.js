import React from 'react'

export default function Form(props) {
    const { values, inputChange, checkboxChange, submit, disabled, errors } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onCheckboxChange = e => {
        const { name, checked } = e.target
        checkboxChange(name, checked)
    }

    const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value)
    }
    return (
        <form onSubmit={onSubmit}>
            <button disabled={disabled}>Add User</button>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <label> Name
                <input
                    name='name'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.name}
                />
            </label>
            <label> Email Address
                <input
                    name='email'
                    type='email'
                    maxLength='30'
                    onChange={onInputChange}
                    value={values.email}
                />
            </label>
            <label> Password
                <input
                    name='password'
                    type='password'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.password}
                />
            </label>
            <label>Terms of Service
                <input
                    type="checkbox"
                    name='terms'
                    checked={values.terms === true }
                    onChange={onCheckboxChange}
                />
            </label>
        </form>
    )

}