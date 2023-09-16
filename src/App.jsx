import { useState, useEffect } from 'react'
import './index.css'
import Login from './components/FormLogin.jsx'
import NavBar from './components/Navbar.jsx'
import RegistrationForm from './components/FormRegistration.jsx'
import Dashboard from './components/Dashboard.jsx'
import AccountBalance from './components/Dashboard/AccountBalance'
import EnrollAccount from './components/Dashboard/EnrollAccount'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  useEffect(() => {
    const registeredAccounts = [
      {
        username: 'admin',
        password: 'admin',
        firstName: 'Administrator',
        middleName:'',
        LastName:'',
        birthDate:'',
        email:'',
        bankNumberS: '101-12345678-1',
        balanceSavings:99999999.99,
        bankNumberC: '101-12345678-2',
        balanceChecking:99999999.99,
      }
    ]
    
    localStorage.setItem('accounts', JSON.stringify(registeredAccounts))
  }, [])

  const handleNewUserRegistration = (formData) => {
  const accountData = JSON.parse(localStorage.getItem('accounts')) || []
  const newData = [...accountData, formData]

  localStorage.setItem('accounts', JSON.stringify(newData))
}

  const [currentPage, setCurrentPage] = useState('login')
  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
  <>
    <div className="flex flex-col border-solid border-2 w-screen h-screen bg-red-300 justify-center items-center">
      <main>
        <BrowserRouter>
          <Routes>
          <Route path="/register" element={<RegistrationForm handleNewUserRegistration={handleNewUserRegistration} />} />
            <Route path="/home" element={<Dashboard user={loggedInUser} />} />
            <Route path="/login" element={<Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/account-balance" element={<AccountBalance user={loggedInUser} />} />
            <Route path="/enroll-account" element={<EnrollAccount user={loggedInUser} />} />
          </Routes>
        </BrowserRouter>
      </main>
      </div>
      <div className="bg-fuchsia-300">footer here</div>     
  </>       
  )
}

export default App