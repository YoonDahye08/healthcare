import { Link } from 'react-router-dom'
<<<<<<< HEAD
import React from 'react' // 'React' must be in scope when using JSX  react/react-in-jsx-scope
import './Header.css'
=======
import React from 'react'
import "./Header.css"
>>>>>>> eb392ce00f623787636ef4029b1076a818c94529

export default function Header() {
  return (
    <div className="header">
      <h2>
        <Link to="/">HealthCare</Link>
      </h2>
      <ul>
<<<<<<< HEAD
        <li className="game">
          치매예방게임
          <ul className="subgame">
=======
        <li className='game'>
          치매 예방 게임
          <ul className='subgame'>
>>>>>>> eb392ce00f623787636ef4029b1076a818c94529
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
        <li>
          <Link to="/Login">로그인</Link>
        </li>
        <li>
          <Link to="/Join">회원가입</Link>
        </li>
      </ul>
    </div>
  )
}
