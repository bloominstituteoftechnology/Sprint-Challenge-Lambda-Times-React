import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    const {card} = props;

    return (
        <div className="card">
            <div className="headline">{card.headline}</div>
            <div className="author">
                <div className="img-container">
                    <img src={'' || card.img}/>
                </div>
                <span>By {card.author}</span>
            </div>
        </div>
    );
};

Card.propTypes = {
    headline: PropTypes.string.isRequired,
    img: PropTypes.string,
    author: PropTypes.string.isRequired
};

Card.defaultProps = {
    headline: 'An Article',
    author: 'Unknown Author'
};

export default Card;
