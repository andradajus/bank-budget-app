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
  <div className="w-full max-w-xs">
  <form onSubmit={onSubmitLogin} className="flex flex-col gap-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={username} onChange={onChangeUsername} />
        {usernameErrorMessage && (
          <small className="text-red-700">{usernameErrorMessage}</small>
        )}
      </div>
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={password} onChange={onChangePassword} />
        {passwordErrorMessage && (
          <small className="text-red-700">{passwordErrorMessage}</small>
        )}
      </div>
      
      <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={() => navigate('/Register')}>Register</button>
      <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="">Forgot Password</button>
      </div>
    </form>
  </div>
  )
}





export default Login
