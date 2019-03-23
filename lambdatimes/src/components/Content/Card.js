import React from 'react';
import propTypes from 'prop-types';

const Card = props => {
    return (
        <div className="card">
            <div className="headline">{props.cards.headline}</div>
            <div className="author">
                <div className="img-container">
                    <img src={props.cards.img} alt="img" />
                </div>
                <span>By {props.cards.author}</span>
            </div>
        </div>
    );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: propTypes.shape({
    headline: propTypes.string.isRequired,
    tab: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    author: propTypes.string.isRequired
  })
}

export default Card;
