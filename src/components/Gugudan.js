import React, { useState, useEffect } from 'react'

const Gugudan = () => {
  const [problem, setProblem] = useState({ multiplicand: 0, multiplier: 0 })
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')

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
    } else {
      setFeedback('틀렸습니다. 다시 시도하세요.')
    }
    setAnswer('')
    generateProblem()
  }

  return (
    <div className='Gugudan'>
      <h1>구구단 게임</h1>
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
    </div>
  )
}

export default Gugudan
