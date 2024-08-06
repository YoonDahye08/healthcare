// import React from 'react'
import dementia1 from '../img/dementia3.png'
import dementia2 from '../img/dementia4.png'
import dementia_img1 from '../img/dementia1.jpg'
import dementia_img2 from '../img/dementia2.jpg'
import prevention_img from '../img/dementia333.jpg'
import './Home.css'

import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Home() {
  /*
  const checkSession = async () => {
    try {
      const response = await axios.get(
        'https://zz.msporthome.store/server/loginCheck'
      )
      if (response.data.authenticated) {
        // 로그인 상태
        alert(response.data.user)
        console.log('User:', response.data.user)
      } else {
        // 로그아웃 상태
        alert('')
        console.log('Not authenticated')
      }
    } catch (error) {
      alert('Error checking session:', error)
      console.error('Error checking session:', error)
    }
  }
  checkSession() */

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://zz.msporthome.store/server/loginCheck');
        setUserData(response.data);
      } catch (error) {
        alert('Error fetching user data');
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userData) {
      alert(userData.login_state);
    }
  }, [userData]);

  return (
    <div className="home">
      <div className="main">
        <h1>고령화사회의 적, 치매</h1>
        <p className="graphename">65세 이상 추정치매환자 및 중증도별 현황</p>
        <div className="dementia">
          <img src={dementia1} alt="65세이상 추정치매환자 및 중증도별 현황" />
          <span>
            지난 5년간 65세 이상 중증도별 추정치매환자 추이를 살펴보면
            경도치매환자가 가장 많고, 중증치매환자가 가장 적음
          </span>
        </div>

        <p className="graphename">연도별 추정채미환자수 및 유병률</p>
        <div className="dementia">
          <img src={dementia2} alt="연도별 추정치매환자수 및 유병률" />
          <span>
            전국 60세 이상 추정치매환자지수는 2018년 약 77만명, 2019년 약
            82만명, 2020년 약 86만명, 2021년 약 91만명, 2022년 약 96만명으로
            매년 약 5만명씩 증가하는 추세
            <br />
            전국 65세 이상 추정치매환자지수는 2018년 약 75만명, 2019년 약
            79만명, 2020년 약 84만명, 2021년 약 89만명, 2022년 약 94만명으로
            매년 약 5만명씩 증가하는 추세
          </span>
        </div>
      </div>

      <div className="earlytreatment">
        <p className="treatment">치매, 조기 치료가 중요합니다!</p>
        <div className="earlysymptoms">
          <img
            src={dementia_img1}
            alt="치매증상 이미지1"
            className="dementia_img1"
          />
          <img
            src={dementia_img2}
            alt="치매증상 이미지2"
            className="dementia_img2"
          />
          <p>치매 초기 증상</p>
          <ol>
            <li>
              기억장애
              <ul>
                <li>이름, 전화번호 등을 기억하기 힘듭니다.</li>
                <li>
                  며칠 전에 들었던 이야기를 잊어버려 같은 질문을 반복합니다.
                </li>
                <li>어떤 일을 해놓고도 잊어버려 다시합니다.</li>
                <li>물건을 어디다 두었는지 몰라 찾아 헤맨 적이 있습니다.</li>
                <li>
                  심한 경우 오전의 일을 오후에 잊어버리거나, 방금전의 일을
                  잊어버리는 경우도 있습니다.
                </li>
                <li>
                  가스불 위에 음식을 올려놓은 것을 잊어버려 태우는 경우가 종종
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              언어장애
              <ul>
                <li>
                  하고 싶은 말이나 표현이 금방 떠오르지 않고 물건 이름이 잘
                  생각나지 않습니다.
                </li>
                <li>
                  책을 읽을 때도 같은 문장을 여러번 반복해서 읽어야 이해가
                  됩니다.
                </li>
                <li>
                  심한 경우에는 신문이나 잡지를 읽을 때 이야기 줄거리를 파악하지
                  못합니다.
                </li>
                <li>
                  말귀를 잘 못알아 듣습니다. 청력저하에 의한 증상일 수도 있지만
                  치매의 초기증상일 수 있으니 주의깊게 보셔야 합니다.
                </li>
              </ul>
            </li>
            <li>
              계산 능력 저하
              <ul>
                <li>
                  계산능력이 떨여져서 이전에 잘하던 사람도 돈관리를 못하게
                  됩니다.
                </li>
                <li>시장에 가서 거스름돈을 받아오는데 실수가 생깁니다.</li>
              </ul>
            </li>
            <li>
              성격 및 감정의 변화
              <ul>
                <li>
                  이전에는 사교적이었으나 외출하기를 싫어 하고 집안에만 있으려고
                  합니다.
                </li>
                <li>평소에는 엄격하던 사람이 이상할 정도로 너그러워집니다.</li>
                <li>의욕적으로 하던 일조차도 귀찮아 합니다.</li>
                <li>어린아이 같이 생각이 단순해집니다.</li>
                <li>
                  이기적으로 변할 수도 있고 세수나 목욕 등의 개인위생도
                  게을리하게 됩니다.
                </li>
              </ul>
            </li>
            <li>
              이상행동
              <ul>
                <li>쓸데없이 바깥을 배회하는 증상을 보이기도 합니다.</li>
                <li>
                  때리거나 고함을 지르거나 욕설을 하는 등의 공격적인 행동을
                  보이기도 합니다.
                </li>
                <li>
                  '누군가 자기 자신의 물건을 훔쳐갔다.', '배우자가 바람을
                  핀다.', '남이 나를 해치려한다.' 는 등의 망상을 보이는 경우가
                  있습니다.
                </li>
                <li>
                  집안을 왔다갔다 하면서 옷을 입었다 벗었다 하거나 장롱이나
                  서랍에 있는 모든 옷을 꺼내서 다개어서 다시 넣었다가 또 꺼내서
                  정리하는 반복적인 행동을 보이는 경우도 있습니다.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="prevention">
        <span className="prevention333">치매 예방 수칙 333</span>
        <br />
        <img
          src={prevention_img}
          alt="치매 예방 수칙 333"
          className="prevention_img"
        />
      </div>
    </div>
  )
}
