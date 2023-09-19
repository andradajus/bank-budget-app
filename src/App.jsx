import { useState, useEffect } from 'react'
import './index.css'
import Login from './components/FormLogin.jsx'
import RegistrationForm from './components/FormRegistration.jsx'
import Dashboard from './components/Dashboard.jsx'
import AlertComponent from './components/AlertBox.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

  function App() {
    const setInitialData = () => {
      const registeredAccounts = [
        {
          username: 'admin',
          password: 'admin',
          firstName: 'Administrator',
          middleName: '',
          LastName: '',
          birthDate: '',
          email: '',
          bankNumberS: '101-12345678-1',
          balanceSavings: 99999999.99,
          bankNumberC: '101-12345678-2',
          balanceChecking: 99999999.99,
        },
      ];
  
      localStorage.setItem('accounts', JSON.stringify(registeredAccounts))
    };
  
    useEffect(() => {
      setInitialData()
    }, []);
  
    const handleNewUserRegistration = (formData) => {
      const accountData = JSON.parse(localStorage.getItem('accounts')) || []
      const newData = [...accountData, formData];
      localStorage.setItem('accounts', JSON.stringify(newData))
    }

  const [alert, setAlert] = useState(null);
  const [currentPage, setCurrentPage] = useState('login')
  const [loggedInUser, setLoggedInUser] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ message, type })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }


  return (
    <>
      <div className="flex flex-col border-solid border-2 w-screen h-screen bg-blue-100 justify-center items-center">
        <main>
          {alert && <AlertComponent message={alert.message} type={alert.type} />}
          <Router>
            <Routes>
              <Route
                path="/register"
                element={<RegistrationForm handleNewUserRegistration={handleNewUserRegistration} showAlert={showAlert} />}
              />
              <Route
                path="/home/*"
                element={<Dashboard user={loggedInUser} />}
              />

              <Route
              path="*"
              element={<Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} showAlert={showAlert} />}
              />

              <Route
                path="/login"
                element={<Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} showAlert={showAlert} />}
              />
            </Routes>
          </Router>
        </main>
      </div>
      <div className="bg-fuchsia-300">footer here</div>
    </>
  )
}

export default App
