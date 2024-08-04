import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('loggedInUser', username)
      navigate('/capital')
    } else {
      alert('Please enter your username')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
