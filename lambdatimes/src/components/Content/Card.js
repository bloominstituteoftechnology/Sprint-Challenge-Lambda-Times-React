import React from 'react';

const Card = ({data}) => {
  return (
    <div className="card">
      <div className="headline">{data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={data.img} />
        </div>
        <span>By {data.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
