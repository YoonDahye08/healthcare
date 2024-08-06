import React, { useState, useEffect } from 'react'
import './Gugudan.css' // CSS 파일을 import

const Gugudan = () => {
  const [problem, setProblem] = useState({ multiplicand: 0, multiplier: 0 })
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  const [gameFinished, setGameFinished] = useState(false)

  useEffect(() => {
    generateProblem()
  }, [])

  const generateProblem = () => {
    const multiplicand = Math.floor(Math.random() * 9) + 1
    const multiplier = Math.floor(Math.random() * 9) + 1
    setProblem({ multiplicand, multiplier })
  }

  const submitAnswer = () => {
    const userAnswer = parseInt(answer, 10)
    if (userAnswer === problem.multiplicand * problem.multiplier) {
      setFeedback('정답입니다!')
      setScore(score + 5)
    } else {
      setFeedback('틀렸습니다. 다시 시도하세요.')
    }
    setAnswer('')
    if (questionCount + 1 === 25) {
      setGameFinished(true)
    } else {
      setQuestionCount(questionCount + 1)
      generateProblem()
    }
  }

  const restartGame = () => {
    setScore(0)
    setQuestionCount(0)
    setGameFinished(false)
    setFeedback('')
    generateProblem()
  }

  return (
    <div className='gugudan'>
      <h1>구구단</h1>
      {gameFinished ? (
        <div>
          <h2>게임 끝! 점수: {score}점</h2>
          <button className='gugudan-button' onClick={restartGame}>
            다시 시작
          </button>
        </div>
      ) : (
        <div>
          <div className='gugudan-problem'>
            {`${problem.multiplicand} x ${problem.multiplier}`}
          </div>
          <input
            type='number'
            className='gugudan-answer'
            placeholder='정답 입력'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button className='gugudan-button' onClick={submitAnswer}>
            제출
          </button>
          <div className='gugudan-feedback'>{feedback}</div>
          <div className='gugudan-score'>점수: {score}/100</div>
          <div className='gugudan-question-count'>
            문제 수: {questionCount + 1}/25
          </div>
        </div>
      )}
    </div>
  )
}

export default Gugudan
