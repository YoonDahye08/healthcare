// import React from 'react'
import dementia1 from '../img/dementia3.png'
import dementia2 from '../img/dementia4.png'
import dementia_img1 from '../img/dementia1.jpg'
import dementia_img2 from '../img/dementia2.jpg'
import prevention_img from '../img/dementia333.jpg'
import icon_img1 from "../img/icon_img1.png";

import game_img1 from "../img/game_img1.png"
import game_img2 from "../img/game_img2.png"
import './Home.css'


export default function Home() {

  const gameLink1 = 'Gugudan';
  const gameLink2 = 'Capital';

  return (
    <div className="home">
      <div>
        <a href={gameLink1}><img src={game_img1} alt="게임 바로가기" className="game_img1"/></a>
        <a href={gameLink2}><img src={game_img2} alt="게임 바로가기2" className="game_img2"/></a>
      </div>
      
      <div className='older'>
        <p>전국 60세 이상</p>
        <div className='older_2023'>
          <p>2023년 노인인구</p>
          <p>13,652,453명</p>
        </div>
        <div className='older_p'>
          <p>전국</p>
          <p>추정치매환자수 : 1,010,400.2 명</p>
          <p>추정치매유병률 : 7.40%</p>
        </div>
      </div>
      
    </div>
  )
}
