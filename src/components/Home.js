// import React from 'react'
import dementia1 from '../img/dementia3.png'
import dementia2 from '../img/dementia4.png'
import dementia_img1 from '../img/dementia1.jpg'
import dementia_img2 from '../img/dementia2.jpg'
import prevention_img from '../img/dementia333.jpg'
import icon_img1 from '../img/icon_img1.png'

import game_img1 from '../img/game_img1.png'
import game_img2 from '../img/game_img2.png'
import './Home.css'

export default function Home() {
  const gameLink1 = 'Gugudan'
  const gameLink2 = 'Capital'

  return (
    <div className="home">
      <div>
        <a href={gameLink1}>
          <img src={game_img1} alt="게임 바로가기" className="game_img1" />
        </a>
        <a href={gameLink2}>
          <img src={game_img2} alt="게임 바로가기2" className="game_img2" />
        </a>
      </div>

      <div className='older'>
        <p>2022년 전국 65세 이상</p>
        <div className='older_1'>
          <p>노인인구</p>
          <p>9,010,544명 (17.6%)</p>
        </div>
        <div className='older_2'>
          <p>치매상병자수</p>
          <p>923,003명 (10.2%)</p>
        </div>
        <div className='older_3'>
          <p>추정치매환자수</p>
          <p>935,086.6명</p>
        </div>
        <div className='older_4'>
          <p>치매환자 1인당 연간 관리비용 (추정)</p>
          <p>2,220만원</p>
        </div>
        <div className='copy'>
          - Copyright (c) 중앙치매센터 -
        </div>
      </div>

      <div className='today'>
        <p>치매환자유병현황 확인</p>
        <a href='https://www.nid.or.kr/info/today_list_2023.aspx' target='_blank'>치매오늘은</a>
      </div>
    </div>
  )
}
