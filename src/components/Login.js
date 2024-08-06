import React, { useState, useEffect } from 'react'
import axios from 'axios'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // 여기에서 로그인 로직 구현

    const checkSession = async () => {
      try {
        const inputEmail = document.getElementById('Email')
        const inputPW = document.getElementById('PW')

        const Email = inputEmail.value
        const PW = inputPW.value

        const response = await axios.post(
          'https://zz.msporthome.store/server/login',
          {
            Email: Email,
            PW: PW,
          }
        )

        const login_state = response.data.login_state
        const text_message = response.data.text_message

        if (response.status === 200) {
          if (login_state == 'login') {
            var result = confirm(text_message)

            if (result) {
              window.location.href = '/'
            }
            //alert(text_message)
          } else {
            var result = confirm(text_message)
            //alert(text_message)
          }

          // 로그인 상태
          console.log('User:', response.data.login_state)

          const longin_state = 'login'
          const userObj = { login_state: longin_state }
          window.sessionStorage.setItem('login_state', JSON.stringify(userObj))
        } else {
          alert(response.data.login_state)
          //location.href = '/header'

          console.log('Not authenticated')
        }
      } catch (error) {
        alert('Error checking session:', error)
        console.error('Error checking session:', error)
      }
    }

    checkSession()

    console.log('Login Submitted', credentials)
  }

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이메일 : </label>
          <input
            id="Email"
            type="text"
            name="Email"
            value={credentials.Email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>비밀번호 : </label>
          <input
            id="PW"
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