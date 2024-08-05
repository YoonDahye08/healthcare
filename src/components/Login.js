import React, { useState } from 'react'

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
    <div>
      <h2>로그인</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://zz.msporthome.store/server/login"
      >
        <div>
          <label>
            이메일 :
            <input
              type="text"
              name="Email"
              value={credentials.Email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호 :
            <input
              type="password"
              name="PW"
              value={credentials.PW}
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
