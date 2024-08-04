import React, { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 여기에서 로그인 로직을 구현하세요
    console.log('Login Submitted', credentials)
  }

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            사용자명:
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default Login
