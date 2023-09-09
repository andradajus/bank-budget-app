import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <header>Bank Mo</header>
        <main>
          <h1 className="text-3xl font-bold underline">Hello World</h1>
          <LoginForm />
        </main>      
      <footer>Copyright 2023</footer>
    </div>   
    </>
  )
}

export default App
