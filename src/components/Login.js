import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const history = useHistory()

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('loggedInUser', username)
      history.push('/capital')
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
