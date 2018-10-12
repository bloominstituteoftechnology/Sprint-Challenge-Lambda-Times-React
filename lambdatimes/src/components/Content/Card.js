import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="headline">{this.props.card.headline}</div>
        <div className="author">
          <div className="img-container">
            <img src={this.props.card.img} />
          </div>
          <span>By {this.props.card.author}</span>
        </div>
      </div>
    );
  }
}

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({card: PropTypes.string})
  )
}

export default Card;
