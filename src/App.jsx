import { useState } from 'react'
import './App.css'
import LoginForm from './components/FormLogin.jsx'
import NavBar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('home');
  const goToRegistrationPage = () => { setCurrentPage('registration');
  };

  return (
    <>
    <div className="container">
      <header>Bank Mo</header>
        <main>
        <h1 className="text-3xl font-bold underline">
      Hello world!
        </h1>
          <LoginForm />
          <NavBar />
          {currentPage === 'registration' && (
          <RegistrationForm
            onLoginClick={goToLoginPage}
          />
        )}
        </main>      
      <footer>Copyright 2023</footer>
    </div>   
    </>
  )
}

export default App
