import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Login = (props) => {
  const { setCurrentPage, setLoggedInUser } = props
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  const onChangeUsername = (e) => setUsername(e.target.value)
  const onChangePassword = (e) => setPassword(e.target.value)

  const onSubmitLogin = (e) => {
    e.preventDefault()
    setUsernameErrorMessage('')
    setPasswordErrorMessage('')


    const accounts = JSON.parse(localStorage.getItem('accounts'))

    const selectedAccount = accounts.find(account => username === account.username)

    if (!selectedAccount) {
      setUsernameErrorMessage('User does not exist')
      return
    }

    if (selectedAccount?.password !== password) {
      setPasswordErrorMessage('Username and password does not match')
      return
    }

    if (selectedAccount.password === password) {
      setLoggedInUser(selectedAccount)
      navigate('/home')
      setUsernameErrorMessage('')
      setPasswordErrorMessage('')
      return
    }
  }

  return (
    <form onSubmit={onSubmitLogin} className="flex flex-col gap-10">
      <div className="flex flex-col">
        <label>Username</label>
        <input className="border-solid" type="text" value={username} onChange={onChangeUsername} />
        {usernameErrorMessage && (
          <small className="text-red-700">{usernameErrorMessage}</small>
        )}
      </div>
      
      <div className="flex flex-col">
        <label>Password</label>
        <input className="border-solid" type="password" value={password} onChange={onChangePassword} />
        {passwordErrorMessage && (
          <small className="text-red-700">{passwordErrorMessage}</small>
        )}
      </div>

      <button type="submit">Login</button>
      <button type="submit">Forgot Password</button>
      <button type="submit" onClick={() => navigate('/Register')}>Register</button>
    </form>
  )
}


export default Login
