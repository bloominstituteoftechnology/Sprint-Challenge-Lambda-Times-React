import React from 'react';

import PropTypes from 'prop-types';


const Card = props => {
  console.log(props);



  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>  {/* added */}
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt = 'cardIMG' />   {/* added */}
        </div>
        <span>By {props.card.author}</span>         {/* added */}
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object
};



export default Card;
