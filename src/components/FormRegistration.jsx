import React from 'react';
import { useState, useEffect } from 'react'
import SelectCountry from './ZFunctionalComponent/SelectCountry.jsx'
import { useNavigate } from 'react-router-dom'
import SelectBirthday from './ZFunctionalComponent/SelectBirthday.jsx'
import { Input } from "@material-tailwind/react";

const RegistrationForm = ({ handleNewUserRegistration, showAlert, month, day, year, country}) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectCountry, setCountry] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const parsedAccount = JSON.parse(localStorage.getItem('accounts'))
  const navigate = useNavigate()

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value
    setUsername(inputUsername)

    const isUsernameTaken = usernameChecker(inputUsername)
    if (isUsernameTaken) {
      showAlert('The username is already taken', 'error')
    }
  }

  const usernameChecker = (inputUsername) => {
    return parsedAccount.some(account => account.username === inputUsername);
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
    const inputEmail = e.target.value
    setEmail(inputEmail)

    const isEmailTaken = emailChecker(inputEmail)
    if (isEmailTaken) {
      showAlert('The Email is already taken', 'error')
    }
  }

  const emailChecker = (inputEmail) => {
    return parsedAccount.some(account => account.email === inputEmail);
  }

  const handleBirthDateChange = (formattedDate) => {
    setBirthDate(formattedDate);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === "") {
      showAlert("Do not leave the username field blank", 'error')
      return
    }

    const isUsernameTaken = usernameChecker(username)
    if (isUsernameTaken) {
      showAlert('The username is already taken', 'error');
      return
    }

    if (email === "") {
      showAlert("Do not leave the Email field blank", 'error')
      return
    }

    const isEmailTaken = emailChecker(email)
    if (isEmailTaken) {
      showAlert('The Email is already taken', 'error');
      return
    }

    if (firstName === "") {
      showAlert("Do not leave the First Name field blank", 'error')
      return
    }

    if (lastName === "") {
      showAlert("Do not leave the Last Name field blank", 'error')
      return
    }

    if (month === "" || day ==="" || year ==="") {
      showAlert("Do not leave the Birthdate field blank", 'error')
      return
    }

    if (selectCountry === "") {
      showAlert("Do not leave the Country field blank", 'error')
      return
    }

    if (password === "") {
      showAlert("DO not leave the Password field blank", 'error')
      return
    }

    if (password !== confirmPassword) {
      showAlert('Password does not match', 'error');
      return;
    }
    const randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000)
    const accountNumberSavings = `100-${randomEightDigitNumber}-1`
    const formData = {
      username,
      firstName,
      middleName,
      lastName,
      birthDate,
      email,
      country,
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
      <div className=" flex justfiy-center content-center m-3">
        <form className="flex flex-col bg-gradient-to-l from-blue-200 via-blue-100 to-blue-300 p-6 rounded mx-auto min-h" onSubmit={handleSubmit}>
          <div className="flex align-center justify-center rounded leading-normal text-3xl md:text font-bold pb-4">Register an Account</div>

          <div className="bg-white shadow-md rounded p-5 mb-4 flex w-full justify-between">
            <div>
              <Input
                className="w-72"
                size="lg"
                label="Username"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div>
              <Input
                className="w-72 "
                size="lg"
                type="email"
                label="Email Address"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>

          <div className="bg-white shadow-md rounded p-4 mb-3 flex w-full justify-between flex-row">
            <div className="mr-2">
              <Input
                type="text"
                label="First Name"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>

            <div className="mr-2">
              <Input
                type="text"
                label="Middle Name"
                id="middleName"
                value={middleName}
                onChange={handleMiddleNameChange}
              />
            </div>
            <div>
              <Input
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
            <div>
              <SelectBirthday
                onChange={handleBirthDateChange} />
            </div>
            <div><SelectCountry value={selectCountry} onChange={setCountry} showAlert={showAlert} /></div>
          </div>

          <div className="bg-white shadow-md rounded p-4 mb-3 flex w-full justify-between">
            <div className="flex flex-col">
              <Input
                type="password"
                label="Password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <Input
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
