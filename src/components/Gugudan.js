import React, { useState, useEffect } from 'react'

const Gugudan = () => {
  const [problem, setProblem] = useState({ multiplicand: 0, multiplier: 0 }) // 문제 저장
  const [answer, setAnswer] = useState('') // 답 저장
  const [feedback, setFeedback] = useState('') // 피드백 메세지 저장
  const [score, setScore] = useState(0) // 점수 저장
  const [questionCount, setQuestionCount] = useState(0) // 문제 개수 저장
  const [gameFinished, setGameFinished] = useState(false) // 게임 종료 여부 저장

  // 렌더링 후 문제 생성
  useEffect(() => {
    generateProblem()
  }, [])

  // 문제 생성
  const generateProblem = () => {
    const multiplicand = Math.floor(Math.random() * 9) + 1
    const multiplier = Math.floor(Math.random() * 9) + 1
    setProblem({ multiplicand, multiplier })
  }

  const submitAnswer = () => {
    const userAnswer = parseInt(answer, 10)
    // 답 확인
    if (userAnswer === problem.multiplicand * problem.multiplier) {
      setFeedback('정답입니다!')
      setScore(score + 5)
    } else {
      setFeedback('틀렸습니다. 다시 시도하세요.')
    }
    setAnswer('') // 입력 필드 초기화
    // 25문제 풀면 게임 종료
    if (questionCount + 1 === 25) {
      setGameFinished(true)
    } else {
      setQuestionCount(questionCount + 1) // 문제 개수 증가
      generateProblem() // 새로운 문제 생성
    }
  }

  // 게임 다시 시작
  const restartGame = () => {
    setScore(0)
    setQuestionCount(0)
    setGameFinished(false)
    setFeedback('')
    generateProblem()
  }

  return (
    <div className='Gugudan'>
      <h1>구구단 게임</h1>
      {gameFinished ? (
        // 게임 종료 됐을 때 보일 화면
        <div>
          <h2>게임 끝! 점수: {score}점</h2>
          <button onClick={restartGame}>다시 시작</button>
        </div>
      ) : (
        <div>
          <div id='problem'>
            {`${problem.multiplicand} x ${problem.multiplier}`}
          </div>
          <input
            type='number'
            id='answer'
            placeholder='정답 입력'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={submitAnswer}>제출</button>
          <div id='feedback'>{feedback}</div>
          <div id='score'>점수: {score}/100</div>
          <div id='question-count'>문제 수: {questionCount + 1}/25</div>
        </div>
      )}
    </div>
  )
}

export default Gugudan
