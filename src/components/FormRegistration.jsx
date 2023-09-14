import React from 'react';
import {useState, useEffect} from 'react'
import Inputs from './Inputs.jsx'
import SelectCountry from './ZFunctionalComponent/SelectCountry.jsx'

const RegistrationForm = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectCountry, setCountry] = useState('')

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
      };

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
        <form className="flex flex-col" onSubmit={handleSubmit}>

        <label>Username<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Username"
                id="username"
                required
            />

            <label>First Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="First Name"
                id="firstName"
                required
            />

            <label>Middle Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Middle Name" 
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

            <SelectCountry value={selectCountry} onChange={handleCountryChange} />

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
    );
}

export default RegistrationForm
