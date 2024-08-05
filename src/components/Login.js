import React, { useState } from 'react'
<<<<<<< HEAD
import './Login.css'
=======
import "./Login.css"
>>>>>>> eb392ce00f623787636ef4029b1076a818c94529

const Login = () => {
  const [credentials, setCredentials] = useState({ Email: '', PW: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 여기에서 로그인 로직 구현
    console.log('Login Submitted', credentials)
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
