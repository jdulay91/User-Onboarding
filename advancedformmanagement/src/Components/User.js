import React from 'react'

export default function User({ user }) {
    if (!user) {
        return <h2> Fetching users</h2>
    }
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Password: Secret</p>            

        </div>
    )
}