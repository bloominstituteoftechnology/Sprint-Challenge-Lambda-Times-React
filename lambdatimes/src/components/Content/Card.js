import React from "react";
import PropTypes from 'prop-types';

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="headline">{this.props.card.headline}</div>
        <div className="author">
          <div className="img-container">
            <img src={this.props.card.img /* image source goes here */} alt='' />
          </div>
          <span>By {this.props.card.author}</span>
        </div>
      </div>
    );
  }
}

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
