import React from 'react';

export default function Card({ img:imgSrc, author, headline }) {
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={imgSrc} />
        </div>
        <span>By{author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

