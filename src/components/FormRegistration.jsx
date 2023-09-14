import React from 'react';
import {useState, useEffect} from 'react'
import Inputs from './Inputs.jsx'

const RegistrationForm = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handlePasswordChange  = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    

         if(password !== confirmPassword) {
         console.log('Password does not match')
            return;
         }
         console.log('Success')
     }

    return (
    <>
        <form className="flex flex-col" onSubmit={handleSubmit}>

        <label>Username<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Username" //required 
                id="username"
            />

            <label>First Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="First Name" //required
                id="firstName"
            />

            <label>Middle Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Middle Name" //optional
                id="middleName"
            />

            <label>Last Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Last Name"
                id="lastName"
                required
            />

            <label>Birth Date<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Dito yung birthday" //dropdown
                id="birthday"
                required
            />

            <label>Email Address<span className="text-red-600">*</span></label>
            <input
                type="email"
                label="Email Address"
                id="email"
                required
            />

            <label>Country<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Dito yung country" 
                id="country"
                required
            />

            <label>Password<span className="text-red-600">*</span></label>
            <input
                type="password"
                label="Password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />

            <label>Confirm Password<span className="text-red-600">*</span></label>
            <input
                type="password"
                label="Confirm Password" 
                id="confirmPassword"  
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
            />
          


            <button type="submit">Register</button>
            <button type="button">Forgot Password</button>
        </form>
    </>    
    );
}

export default RegistrationForm
