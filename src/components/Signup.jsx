import React, { useState } from 'react'

export default function Signup() {
    const [name, setName] = useState("")

    const onHandleClick = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" id='name' name='name' onChange={onHandleClick} value={name}/>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}