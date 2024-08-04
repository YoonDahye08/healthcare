import { Link } from 'react-router-dom'
import React from 'react' // 'React' must be in scope when using JSX  react/react-in-jsx-scope

export default function Header() {
  return (
    <div className='header'>
      <h2>
        <Link to='/'>HealthCare</Link>
      </h2>
      <ul>
        <li className='game'>
          치매예방게임
          <ul className='subgame'>
            <li>
              <Link to='/Gugudan'>구구단</Link>
            </li>
            <li>
              <Link to='/Capital'>수도 맞히기</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/TeleHealth'>원격 진료</Link>
        </li>
        <li>
          <Link to='/News'>뉴스</Link>
        </li>
        <li>
          <Link to='/Login'>로그인</Link>
        </li>
        <li>
          <Link to='/Join'>회원가입</Link>
        </li>
      </ul>
    </div>
  )
}
