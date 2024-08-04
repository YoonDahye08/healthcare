import React from 'react'
import newsData from './newsData'

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              사진으로 변경 후 사진 클릭하면 페이지로
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News
