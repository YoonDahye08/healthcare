import React, { useState } from 'react'
import './Join.css' // 스타일 파일 경로

function Join() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

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

  return (
    <div className="container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일 :</label>
        <div
          contentEditable
          id="email"
          name="email"
          className="editable-div"
          onInput={(e) =>
            handleChange({
              target: { name: 'email', value: e.target.innerText },
            })
          }
          suppressContentEditableWarning={true}
        ></div>

        <label htmlFor="password">비밀번호 :</label>
        <div
          contentEditable
          id="password"
          name="password"
          className="editable-div password"
          onInput={(e) =>
            handleChange({
              target: { name: 'password', value: e.target.innerText },
            })
          }
          suppressContentEditableWarning={true}
        ></div>

        <label htmlFor="confirmPassword">비밀번호 확인 :</label>
        <div
          contentEditable
          id="confirmPassword"
          name="confirmPassword"
          className="editable-div password"
          onInput={(e) =>
            handleChange({
              target: { name: 'confirmPassword', value: e.target.innerText },
            })
          }
          suppressContentEditableWarning={true}
        ></div>

        <button type="submit">가입하기</button>
      </form>
      {errorMessage && <p id="error-message">{errorMessage}</p>}
    </div>
  )
}

export default Join
