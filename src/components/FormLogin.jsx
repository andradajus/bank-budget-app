import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Login = (props) => {
  const { setCurrentPage, setLoggedInUser } = props
  const showAlert = (message, type) => {
    props.showAlert(message, type)
  }
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const onChangeUsername = (e) => setUsername(e.target.value)
  const onChangePassword = (e) => setPassword(e.target.value)

  const onSubmitLogin = (e) => {
    e.preventDefault()


    const accounts = JSON.parse(localStorage.getItem('accounts'))

    const selectedAccount = accounts.find(account => username === account.username)

    if (!selectedAccount) {
      showAlert('User does not exist', 'error')
      return
    }

    if (selectedAccount?.password !== password) {
      showAlert('Username and password does not match', 'error')
      return
    }

    if (selectedAccount.password === password) {
      setLoggedInUser(selectedAccount)
      navigate('/home')

      showAlert('Login successful!', 'success')
      return
    }
  }

  return (
  <form onSubmit={onSubmitLogin} className="bg-slate-200 rounded p-6 mt-10 w-96 max-w-xl mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={username} onChange={onChangeUsername} />
      </div>
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={password} onChange={onChangePassword} />
      </div>
      
      <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={() => navigate('/Register')}>Register</button>
      <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="">Forgot Password</button>
      </div>
    </form>

  )
}





export default Login
