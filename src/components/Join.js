import React, { useState } from 'react'
import './Join.css' // 스타일 파일 경로

function Join() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.')
    } else {
      setErrorMessage('')
      alert('회원가입이 완료되었습니다.')
      // 여기서 실제 서버로 데이터를 보내는 로직을 구현할 수 있습니다.
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <div className="container">
        <h2>회원가입</h2>
        <form method="POST" action="https://zz.msporthome.store/server/signup">
          <label htmlFor="email">이메일 : </label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">비밀번호 : </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="PW"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">비밀번호 확인 : </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? '비밀번호 숨기기' : '비밀번호 보이기'}
          </button>

          <button type="submit">가입하기</button>
        </form>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
      </div>
    </div>
  )
}

export default Join
