import React, { useState, useEffect } from 'react'
import './Capital.css'

const questions = {
  easy: [
    {
      country: '프랑스',
      capital: '파리',
      flag: 'https://flagcdn.com/w320/fr.png',
    },
    {
      country: '독일',
      capital: '베를린',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      country: '일본',
      capital: '도쿄',
      flag: 'https://flagcdn.com/w320/jp.png',
    },
    {
      country: '호주',
      capital: '캔버라',
      flag: 'https://flagcdn.com/w320/au.png',
    },
    {
      country: '브라질',
      capital: '브라질리아',
      flag: 'https://flagcdn.com/w320/br.png',
    },
    {
      country: '중국',
      capital: '베이징',
      flag: 'https://flagcdn.com/w320/cn.png',
    },
    {
      country: '러시아',
      capital: '모스크바',
      flag: 'https://flagcdn.com/w320/ru.png',
    },
    {
      country: '영국',
      capital: '런던',
      flag: 'https://flagcdn.com/w320/gb.png',
    },
    {
      country: '이탈리아',
      capital: '로마',
      flag: 'https://flagcdn.com/w320/it.png',
    },
    {
      country: '캐나다',
      capital: '오타와',
      flag: 'https://flagcdn.com/w320/ca.png',
    },
    {
      country: '미국',
      capital: '워싱턴 D.C.',
      flag: 'https://flagcdn.com/w320/us.png',
    },
    {
      country: '대한민국',
      capital: '서울',
      flag: 'https://flagcdn.com/w320/kr.png',
    },
    {
      country: '멕시코',
      capital: '멕시코시티',
      flag: 'https://flagcdn.com/w320/mx.png',
    },
    {
      country: '스페인',
      capital: '마드리드',
      flag: 'https://flagcdn.com/w320/es.png',
    },
    {
      country: '인도',
      capital: '뉴델리',
      flag: 'https://flagcdn.com/w320/in.png',
    },
    {
      country: '아르헨티나',
      capital: '부에노스아이레스',
      flag: 'https://flagcdn.com/w320/ar.png',
    },
    {
      country: '이집트',
      capital: '카이로',
      flag: 'https://flagcdn.com/w320/eg.png',
    },
    {
      country: '터키',
      capital: '앙카라',
      flag: 'https://flagcdn.com/w320/tr.png',
    },
    {
      country: '베트남',
      capital: '하노이',
      flag: 'https://flagcdn.com/w320/vn.png',
    },
    {
      country: '태국',
      capital: '방콕',
      flag: 'https://flagcdn.com/w320/th.png',
    },
  ],
  medium: [
    {
      country: '벨기에',
      capital: '브뤼셀',
      flag: 'https://flagcdn.com/w320/be.png',
    },
    {
      country: '스위스',
      capital: '베른',
      flag: 'https://flagcdn.com/w320/ch.png',
    },
    {
      country: '스웨덴',
      capital: '스톡홀름',
      flag: 'https://flagcdn.com/w320/se.png',
    },
    {
      country: '노르웨이',
      capital: '오슬로',
      flag: 'https://flagcdn.com/w320/no.png',
    },
    {
      country: '남아프리카 공화국',
      capital: '프리토리아',
      flag: 'https://flagcdn.com/w320/za.png',
    },
    {
      country: '콜롬비아',
      capital: '보고타',
      flag: 'https://flagcdn.com/w320/co.png',
    },
    {
      country: '칠레',
      capital: '산티아고',
      flag: 'https://flagcdn.com/w320/cl.png',
    },
    {
      country: '말레이시아',
      capital: '쿠알라룸푸르',
      flag: 'https://flagcdn.com/w320/my.png',
    },
    {
      country: '필리핀',
      capital: '마닐라',
      flag: 'https://flagcdn.com/w320/ph.png',
    },
    {
      country: '인도네시아',
      capital: '자카르타',
      flag: 'https://flagcdn.com/w320/id.png',
    },
    {
      country: '헝가리',
      capital: '부다페스트',
      flag: 'https://flagcdn.com/w320/hu.png',
    },
    {
      country: '그리스',
      capital: '아테네',
      flag: 'https://flagcdn.com/w320/gr.png',
    },
    {
      country: '포르투갈',
      capital: '리스본',
      flag: 'https://flagcdn.com/w320/pt.png',
    },
    {
      country: '이란',
      capital: '테헤란',
      flag: 'https://flagcdn.com/w320/ir.png',
    },
    {
      country: '사우디아라비아',
      capital: '리야드',
      flag: 'https://flagcdn.com/w320/sa.png',
    },
    {
      country: '이스라엘',
      capital: '예루살렘',
      flag: 'https://flagcdn.com/w320/il.png',
    },
    {
      country: '쿠웨이트',
      capital: '쿠웨이트시티',
      flag: 'https://flagcdn.com/w320/kw.png',
    },
    {
      country: '요르단',
      capital: '암만',
      flag: 'https://flagcdn.com/w320/jo.png',
    },
    {
      country: '네덜란드',
      capital: '암스테르담',
      flag: 'https://flagcdn.com/w320/nl.png',
    },
    {
      country: '아일랜드',
      capital: '더블린',
      flag: 'https://flagcdn.com/w320/ie.png',
    },
  ],
  hard: [
    {
      country: '카자흐스탄',
      capital: '아스타나',
      flag: 'https://flagcdn.com/w320/kz.png',
    },
    {
      country: '아제르바이잔',
      capital: '바쿠',
      flag: 'https://flagcdn.com/w320/az.png',
    },
    {
      country: '알바니아',
      capital: '티라나',
      flag: 'https://flagcdn.com/w320/al.png',
    },
    {
      country: '몰타',
      capital: '발레타',
      flag: 'https://flagcdn.com/w320/mt.png',
    },
    {
      country: '모잠비크',
      capital: '마푸투',
      flag: 'https://flagcdn.com/w320/mz.png',
    },
    {
      country: '아이슬란드',
      capital: '레이캬비크',
      flag: 'https://flagcdn.com/w320/is.png',
    },
    {
      country: '라트비아',
      capital: '리가',
      flag: 'https://flagcdn.com/w320/lv.png',
    },
    {
      country: '뉴질랜드',
      capital: '웰링턴',
      flag: 'https://flagcdn.com/w320/nz.png',
    },
    {
      country: '앙골라',
      capital: '루안다',
      flag: 'https://flagcdn.com/w320/ao.png',
    },
    {
      country: '우즈베키스탄',
      capital: '타슈켄트',
      flag: 'https://flagcdn.com/w320/uz.png',
    },
    {
      country: '에티오피아',
      capital: '아디스아바바',
      flag: 'https://flagcdn.com/w320/et.png',
    },
    {
      country: '아르메니아',
      capital: '예레반',
      flag: 'https://flagcdn.com/w320/am.png',
    },
    {
      country: '몽골',
      capital: '울란바토르',
      flag: 'https://flagcdn.com/w320/mn.png',
    },
    {
      country: '네팔',
      capital: '카트만두',
      flag: 'https://flagcdn.com/w320/np.png',
    },
    {
      country: '스리랑카',
      capital: '콜롬보',
      flag: 'https://flagcdn.com/w320/lk.png',
    },
    {
      country: '파라과이',
      capital: '아순시온',
      flag: 'https://flagcdn.com/w320/py.png',
    },
    {
      country: '볼리비아',
      capital: '수크레',
      flag: 'https://flagcdn.com/w320/bo.png',
    },
    {
      country: '캄보디아',
      capital: '프놈펜',
      flag: 'https://flagcdn.com/w320/kh.png',
    },
    {
      country: '라오스',
      capital: '비엔티안',
      flag: 'https://flagcdn.com/w320/la.png',
    },
    {
      country: '미얀마',
      capital: '네피도',
      flag: 'https://flagcdn.com/w320/mm.png',
    },
  ],
}

function Capital() {
  const [currentDifficulty, setCurrentDifficulty] = useState('easy')
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(null)
  const [usedQuestions, setUsedQuestions] = useState(new Set())
  const [userAnswer, setUserAnswer] = useState('')
  const [result, setResult] = useState('')
  const maxScore = 100
  const pointsPerQuestion = 5

  useEffect(() => {
    loadScore()
    loadQuestion()
  }, [currentDifficulty])

  const loadQuestion = () => {
    if (score >= maxScore) {
      setResult('축하합니다! 최대 점수에 도달했습니다!')
      return
    }

    let newIndex
    do {
      newIndex = Math.floor(Math.random() * questions[currentDifficulty].length)
    } while (usedQuestions.has(newIndex))

    setUsedQuestions((prev) => new Set(prev).add(newIndex))
    setQuestionIndex(newIndex)
    setUserAnswer('')
    setResult('')
  }

  const checkAnswer = () => {
    const correctAnswer = questions[currentDifficulty][questionIndex].capital

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setResult('정답입니다!')
      const newScore = score + pointsPerQuestion
      setScore(newScore)
      saveScore(newScore)
    } else {
      setResult(`오답입니다! 정답은 ${correctAnswer}입니다.`)
    }

    if (score + pointsPerQuestion >= maxScore) {
      setResult('축하합니다! 최대 점수에 도달했습니다!')
    }
  }

  const saveScore = (newScore) => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      localStorage.setItem(`${loggedInUser}_score`, newScore)
    }
  }

  const loadScore = () => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const savedScore = localStorage.getItem(`${loggedInUser}_score`)
      if (savedScore !== null) {
        setScore(parseInt(savedScore, 10))
      }
    }
  }

  return (
    <div className="container">
      <h1>수도 맞추기 게임</h1>
      <div className="label-container">
        <label htmlFor="difficulty">난이도 선택:</label>
        <select
          id="difficulty"
          value={currentDifficulty}
          onChange={(e) => {
            setCurrentDifficulty(e.target.value)
            setScore(0)
            setUsedQuestions(new Set())
            setResult('')
            saveScore(0)
          }}
        >
          <option value="easy">쉬움</option>
          <option value="medium">중간</option>
          <option value="hard">어려움</option>
        </select>
      </div>
      {questionIndex !== null && (
        <>
          <img
            id="flag"
            src={questions[currentDifficulty][questionIndex].flag}
            alt="국기"
            className="flag"
          />
          <div id="question">
            {questions[currentDifficulty][questionIndex].country}의 수도는
            무엇입니까?
          </div>
          <input
            type="text"
            id="answer"
            placeholder="여기에 답을 입력하세요"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button id="submit" onClick={checkAnswer}>
            제출
          </button>
          <div id="result">{result}</div>
          <button id="next" onClick={loadQuestion}>
            다음 질문
          </button>
        </>
      )}
      <div id="score">점수: {score}</div>
    </div>
  )
}

export default Capital
