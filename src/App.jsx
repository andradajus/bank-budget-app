import { useState, useEffect } from 'react'
import './index.css'
import Login from './components/FormLogin.jsx'
import NavBar from './components/Navbar.jsx'
import RegistrationForm from './components/FormRegistration.jsx'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  useEffect(() => {
    const accounts = [
      {
        // bankNumber: 'branch code + 9 digits' // randomize 9 digits upon registration , branch code if luzon, 001, if visayas 002, if mindanao, 003
        username: 'admin',
        password: 'admin',
        firstName: 'Administrator',
      }
    ]

    localStorage.setItem('accounts', JSON.stringify(accounts))
  }, [])

  const [currentPage, setCurrentPage] = useState('login')
  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <div className="flex flex-col border-solid border-2 p-10">
      <main>
        <h1 className="text-3xl font-bold underline">Tailwind Test</h1>
        <BrowserRouter>
          <Routes>
           <Route path="/register" element={<RegistrationForm />} />
            <Route path="/home" element={<Dashboard user={loggedInUser} />} />
            <Route path="/login" element={<Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </main>      
    </div>   
  )
}

export default App