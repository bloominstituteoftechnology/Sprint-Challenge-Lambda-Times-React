import React from "react";

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="headline">{this.props.card.headline}</div>
        <div className="author">
          <div className="img-container">
            <img src={this.props.card.img /* image source goes here */} />
          </div>
          <span>By {this.props.card.author}</span>
        </div>
      </div>
    );
  }
}

// Make sure to include PropTypes.

export default Card;
