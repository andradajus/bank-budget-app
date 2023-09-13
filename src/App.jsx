import { useState, useEffect } from 'react'
import './App.css'
import LoginForm from './components/FormLogin.jsx'
import NavBar from './components/Navbar.jsx'
import RegistrationForm from './components/FormRegistration.jsx'

function App() {
  useEffect(() => {
    const accounts = [
      {
        username: 'admin',
        password: 'admin',
      }
    ]

    localStorage.setItem('accounts', JSON.stringify(accounts))
  }, [])

  const [currentPage, setCurrentPage] = useState('registration');

  return (
    <div className="container">
      <header>Bank Mo</header>
      <NavBar />
        <main>
        {currentPage === 'registration' && ( <RegistrationForm /> )}
        <h1 className="text-3xl font-bold underline">
      Hello world!
        </h1>
          <LoginForm />
        </main>      
      <footer>Copyright 2023</footer>
    </div>   
  )
}

export default App
