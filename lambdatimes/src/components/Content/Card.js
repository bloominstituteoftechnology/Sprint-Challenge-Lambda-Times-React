import React from 'react';
import PropTypes from 'prop-types';



const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// const Card = props => {
//   return (
//     <div className="card">
//       <div className="headline">{/* headline goes here */}</div>
//       <div className="author">
//         <div className="img-container">
//           <img src={'' /* image source goes here */} />
//         </div>
//         <span>By {/* author goes here */}</span>
//       </div>
//     </div>
//   );
// };

// Make sure to include PropTypes.


Card.propTypes = {
  card: PropTypes.objectOf(
      PropTypes.shape({
          headline: PropTypes.string,
          tab: PropTypes.string,
          img: PropTypes.string,
          author: PropTypes.string
      })
  ).isRequired
};


export default Card;
