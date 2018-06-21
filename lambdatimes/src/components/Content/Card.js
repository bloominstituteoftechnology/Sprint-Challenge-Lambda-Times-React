import React from 'react';

const Card = props => {
  const { article } = props
  return (
    <div className="card">
      <div className="headline">{article.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={article.img} />
        </div>
        <span>By {article.author}</span>
      </div>
    </div>
  )
}

export default Card