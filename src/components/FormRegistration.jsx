import React from 'react';
import {useState, useEffect} from 'react'
import Inputs from './Inputs.jsx'
import SelectCountry from './ZFunctionalComponent/SelectCountry.jsx'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = ({handleNewUserRegistration}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectCountry, setCountry] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleCountryChange = (e) => {
        setCountry(e.target.value) 
      }

    const handlePasswordChange  = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)  
      }
    
      const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
      }
    
      const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value)
      }
    
      const handleLastNameChange = (e) => {
        setLastName(e.target.value)
      }
    
      const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value)
      }
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
    
         if(password !== confirmPassword) {
         console.log('Password does not match')
            return
         }
         console.log('Success')
         const randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000);

    
         const accountNumberSavings = `100-${randomEightDigitNumber}-1`;
         const formData = {
            username,
            firstName,
            middleName,
            lastName,
            birthDate,
            email,
            password,
            bankNumberS: accountNumberSavings, 
            balanceSavings: 0, 
            bankNumberC: '', 
            balanceChecking: 0, 
          }

        handleNewUserRegistration(formData)
        navigate('/login')
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>

        <label>Username<span className="text-red-600">*</span></label> 
            <input                                                      //for polishing: add validation of repeated on local storage
                 type="text"
                 label="Username"
                 id="username"
                 value={username}
                 onChange={handleUsernameChange}
                 required
            />

            <label>First Name<span className="text-red-600">*</span></label>
            <input
                type="text"                                     
                label="First Name"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
            />

            <label>Middle Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Middle Name"
                id="middleName"
                value={middleName}
                onChange={handleMiddleNameChange}
            />

            <label>Last Name<span className="text-red-600">*</span></label>
            <input
                type="text"
                label="Last Name"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
            />

            <label>Birth Date<span className="text-red-600">*</span></label>
            <input                                                             // for polishing: add a drop downbox with validation on age 18 and below
                 type="text"
                 label="Dito yung birthday"
                 id="birthday"
                 value={birthDate}
                 onChange={handleBirthDateChange}
                 required
            />

            <label>Email Address<span className="text-red-600">*</span></label>
            <input
                type="email"                                                    //for polishing: add validation of repeated on local storage
                label="Email Address"
                id="email"
                value={email}
                onChange={handleEmailChange}
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
          


            <button type="submit" onClick={handleSubmit}>Register</button>
            <button type="button">Forgot Password</button>
        </form>  
    );
}

export default RegistrationForm
