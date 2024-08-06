import React from 'react'
import newsData from './newsData'
import banner from '../img/banner.png'
import './News.css'

const News = () => {
  return (
    <div className='news-container'>
      <div style={{ textAlign: 'center' }}>
        <img src={banner} alt='banner' style={{ width: '100%' }} />
      </div>

      <h1 className='news-title'>News</h1>
      <div className='news-list'>
        {newsData.map((article, index) => (
          <div key={index} className='news-item'>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              <img
                src={article.imageUrl}
                alt={article.title}
                className='news-image'
              />
            </a>
            <div className='news-content'>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
