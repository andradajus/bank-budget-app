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
         console.log('Password does not match') //for alerts
            return
         }
         console.log('Success')
         const randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000)

    
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
      <>
        <form className="flex flex-col bg-slate-200 p-7 rounded" onSubmit={handleSubmit}>
        <div className="flex text-2xl align-center justify-center">Register an Account</div>
         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label>Username<span className="text-red-600">*</span></label> 
            <input   
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300
                focus:invalid:border-red-300 focus:invalid:ring-red-300"                                                   //for polishing: add validation of repeated on local storage
                 type="text"
                 label="Username"
                 id="username"
                 value={username}
                 onChange={handleUsernameChange}
                 required
            />
          </div> 

        <div className="flex flew-row">
          <div className="bg-white shadow-md rounded px-4 pt-3 pb-8 mb-4">
            <label>First Name<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300
                focus:invalid:border-red-300 focus:invalid:ring-red-300" 
                type="text"                                     
                label="First Name"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
            />
          </div>

          <div className="bg-white shadow-md rounded px-4 pt-3 pb-8 mb-4">
            <label>Middle Name</label>
            <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                type="text"
                label="Middle Name"
                id="middleName"
                value={middleName}
                onChange={handleMiddleNameChange}
            />
          </div>


          <div className="bg-white shadow-md rounded px-4 pt-3 pb-8 mb-4">
            <label>Last Name<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300
                focus:invalid:border-red-300 focus:invalid:ring-red-300"
                type="text"
                label="Last Name"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
            />
          </div>
        </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label>Email Address<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300
                focus:invalid:border-red-300 focus:invalid:ring-red-300"
                type="email"                                                    //for polishing: add validation of repeated on local storage
                label="Email Address"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
          </div>

          <div className="flex flew-row justify-between bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
            <label>Birth Date<span className="text-red-600">*</span></label>
            <select
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-red-300 invalid:text-red-300
                  focus:invalid:border-red-300 focus:invalid:ring-red-300"                                                         // for polishing: add a drop downbox with validation on age 18 and below
                 type="text"
                 label="Dito yung birthday"
                 id="birthday"
                 value={birthDate}
                 onChange={handleBirthDateChange}
                 required
            />

          </div>
         
          <div><SelectCountry value={selectCountry} onChange={handleCountryChange} /></div>
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label>Password<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300
                focus:invalid:border-red-300 focus:invalid:ring-red-300" 
                type="password"
                label="Password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label>Confirm Password<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300
                focus:invalid:border-red-300 focus:invalid:ring-red-300" 
                type="password"
                label="Confirm Password" 
                id="confirmPassword"  
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
            />
            </div>
          

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>Register</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Forgot Password</button>
          </div>
        </form>  
      </> 
    )
}

export default RegistrationForm
