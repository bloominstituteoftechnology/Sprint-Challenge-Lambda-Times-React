import React from 'react';

const Card = props => {
  return (
    <div className="card">
    <div className="headline">{this.props.headline}</div>
    <div className="author">
      <div className="img-container">
        <img src={this.props.img} />
      </div>
      <span>By {this.props.author}</span>
    </div>
  </div>
  );
};

// Make sure to include PropTypes.

export default Card;
