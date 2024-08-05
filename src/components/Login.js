import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [credentials, setCredentials] = useState({ Email: '', PW: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form method="POST" action="https://zz.msporthome.store/server/login">
        <div className="form-group">
          <label>이메일 : </label>
          <input
            type="text"
            name="Email"
            value={credentials.Email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>비밀번호 : </label>
          <input
            type="password"
            name="PW"
            value={credentials.PW}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          로그인
        </button>
      </form>
    </div>
  )
}

export default Login