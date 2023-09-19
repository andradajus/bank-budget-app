import React from 'react';
import {useState} from 'react'
import SelectCountry from './ZFunctionalComponent/SelectCountry.jsx'
import { useNavigate } from 'react-router-dom'
import SelectBirthday from './ZFunctionalComponent/SelectBirthday.jsx'
import showAlert from './AlertBox.jsx'

const RegistrationForm = ({handleNewUserRegistration, showAlert}) => {
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
    
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value)
      }

      const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()

      
    
        if (password !== confirmPassword) {
          showAlert('Password does not match', 'error');
          return;
        }
         
         console.log('success')
         
         const randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000)

    
         const accountNumberSavings = `100-${randomEightDigitNumber}-1`
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
        showAlert('Registration Successful. You may now login', 'success')
        
    }

    return (
      <>
      <div className="flex justfiy-center content-center m-3">
        <form className="flex flex-col bg-gradient-to-l from-blue-200 via-blue-100 to-blue-300 p-6 rounded w-4/5 mx-auto min-h" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center rounded leading-normal text-3xl md:text font-bold pb-4">Register an Account</div>

        <div className="bg-white shadow-md rounded p-5 mb-4 flex w-full">
          <div>
              <label className="pr-2">Username<span className="text-red-600">*</span></label> 
              <input   
                className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300 
                focus:ring-blue-500 focus:border-blue-500 "
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
          </div>
          <div>
            <label className="pr-2">Email Address<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-300 invalid:text-red-300 w-80
                focus:ring-blue-500 focus:border-blue-500"
                type="email"                                                    //for polishing: add validation of repeated on local storage
                label="Email Address"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
          </div>
          </div> 

        <div className="bg-white shadow-md rounded p-4 mb-3 flex w-full justify-between flex-row">
          <div>
            <label className="pr-2">First Name<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
               invalid:border-red-300 invalid:text-red-300 w-50
               focus:ring-blue-500 focus:border-blue-500"
                type="text"                                     
                label="First Name"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
            />
          </div>

          <div>
            <label className="pr-2 pl-2">Middle Name</label>
            <input
                className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
               invalid:border-red-300 invalid:text-red-300 w-50
               focus:invalid:border-red-300 focus:invalid:ring-red-300  focus:ring-blue-500 focus:border-blue-500"
                type="text"
                label="Middle Name"
                id="middleName"
                value={middleName}
                onChange={handleMiddleNameChange}
            />
          </div>


          <div>
            <label className="pr-2 pl-2">Last Name<span className="text-red-600">*</span></label>
            <input
                className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
               invalid:border-red-300 invalid:text-red-300 w-50
               focus:ring-blue-500 focus:border-blue-500"
                type="text"
                label="Last Name"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
            />
          </div>
        </div>

          

          <div className="bg-white shadow-md rounded p-4 mb-3 flex w-full justify-between">
          <div><SelectBirthday value={birthDate} onChange={handleBirthDateChange} /></div>
          <div><SelectCountry value={selectCountry} onChange={handleCountryChange} showAlert={showAlert} /></div>
          </div>

          <div className="bg-white shadow-md rounded p-4 mb-3 flex w-full justify-between">
            <div className="flex flex-col">
              <label>Password<span className="text-red-600">*</span></label>
              <input
                  className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-red-300 invalid:text-red-300
                  focus:ring-blue-500 focus:border-blue-500" 
                  type="password"
                  label="Password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
              />
            </div>

            <div className="flex flex-col">
              <label>Confirm Password<span className="text-red-600">*</span></label>
              <input
                  className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-red-300 invalid:text-red-300
                  focus:ring-blue-500 focus:border-blue-500" 
                  type="password"
                  label="Confirm Password" 
                  id="confirmPassword"  
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>Register</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Forgot Password</button>
          </div>
        </form>  
      </div>
      </> 
    )
}

export default RegistrationForm
