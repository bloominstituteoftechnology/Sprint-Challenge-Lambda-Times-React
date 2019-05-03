import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class Cards extends React.Component
{
  render(){
    return (
      <div className="cards-container">
        {/* Using the cards prop, map over the list creating a 
            new Card component for each passing the card as the only prop*/
            this.props.cards.map((x,i) => <Card key={`${i}  :card`} data={x}/>)
        }
      </div>
    )
  }
}
Cards.propTypes =
{
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
  
}
// Make sure you include prop types for all of your incoming props

export default Cards;