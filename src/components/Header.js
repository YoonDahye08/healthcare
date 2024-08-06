import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const userObj = JSON.parse(window.sessionStorage.getItem('login_state'))
    if (userObj && userObj.login_state === 'login') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    window.sessionStorage.removeItem('login_state')
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <div className="header">
      <h2>
        <Link to="/">HealthCare</Link>
      </h2>
      <ul>
        <li className="game">
          치매 예방 게임
          <ul className="subgame">
            <li>
              <Link to="/Gugudan">구구단</Link>
            </li>
            <li>
              <Link to="/Capital">수도 맞히기</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/TeleHealth">원격 진료</Link>
        </li>
        <li>
          <Link to="/News">뉴스</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/Login">로그인</Link>
            </li>
            <li>
              <Link to="/Join">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
