import React, { Component } from 'react';

class Card extends Component {

  render(){
    const author = this.props.author;
        const headline = this.props.headline;
        const image= this.props.img;

  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={image} alt={author}/>
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
}};

// Make sure to include PropTypes.

export default Card;
