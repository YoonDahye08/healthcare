import React, { useState, useEffect } from 'react'

const Gugudan = () => {
  // 문제를 저장하는 상태
  const [problem, setProblem] = useState({ multiplicand: 0, multiplier: 0 })
  // 사용자의 답을 저장하는 상태
  const [answer, setAnswer] = useState('')
  // 피드백 메시지를 저장하는 상태
  const [feedback, setFeedback] = useState('')
  // 점수를 저장하는 상태
  const [score, setScore] = useState(0)
  // 문제 개수를 저장하는 상태
  const [questionCount, setQuestionCount] = useState(0)
  // 게임 종료 여부를 저장하는 상태
  const [gameFinished, setGameFinished] = useState(false)

  // 컴포넌트가 처음 렌더링될 때 문제를 생성
  useEffect(() => {
    generateProblem()
  }, [])

  // 랜덤한 문제를 생성하는 함수
  const generateProblem = () => {
    const multiplicand = Math.floor(Math.random() * 9) + 1
    const multiplier = Math.floor(Math.random() * 9) + 1
    setProblem({ multiplicand, multiplier })
  }

  // 사용자가 답을 제출했을 때 호출되는 함수
  const submitAnswer = () => {
    const userAnswer = parseInt(answer, 10)
    // 사용자의 답이 맞는지 확인
    if (userAnswer === problem.multiplicand * problem.multiplier) {
      setFeedback('정답입니다!')
      setScore(score + 5) // 정답이면 점수 5점 추가
    } else {
      setFeedback('틀렸습니다. 다시 시도하세요.')
    }
    setAnswer('') // 입력 필드 초기화
    // 25번째 문제까지 도달하면 게임 종료
    if (questionCount + 1 === 25) {
      setGameFinished(true)
    } else {
      setQuestionCount(questionCount + 1) // 문제 개수 증가
      generateProblem() // 새로운 문제 생성
    }
  }

  // 게임을 다시 시작하는 함수
  const restartGame = () => {
    setScore(0) // 점수 초기화
    setQuestionCount(0) // 문제 개수 초기화
    setGameFinished(false) // 게임 종료 상태 초기화
    setFeedback('') // 피드백 메시지 초기화
    generateProblem() // 새로운 문제 생성
  }

  return (
    <div className='Gugudan'>
      <h1>구구단 게임</h1>
      {gameFinished ? (
        // 게임이 종료되었을 때 보여줄 화면
        <div>
          <h2>게임 끝! 점수: {score}점</h2>
          <button onClick={restartGame}>다시 시작</button>
        </div>
      ) : (
        // 게임이 진행 중일 때 보여줄 화면
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