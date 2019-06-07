import React from 'react';
import Cards from "./Cards"

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{this.props.headliine}</div>
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
