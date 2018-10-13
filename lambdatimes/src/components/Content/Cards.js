import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    this.setState({cards: this.props.cards})
  }

  render(){
    return (
      <div className="cards-container">
        {/* Using the cards prop, map over the list creating a 
            new Card component for each passing the card as the only prop*/}
            {this.props.cards.map(card => (
              <div>
                  <Card card={card.card}/>
              </div>
            ))}
      </div>
    )
  }
}
  


// const Cards = props => {
//   return (
//     <div className="cards-container">
//       {/* Using the cards prop, map over the list creating a 
//           new Card component for each passing the card as the only prop*/}
//           {props.cards.map(card => (
//             <div>
//                 <Card card={card.card}/>
//             </div>
//           ))}
//     </div>
//   )
// }

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  tabs: PropTypes.array
}

// Cards.propTypes = {
//   cards: PropTypes.arrayOf(
//       PropTypes.shape({
//           headline: PropTypes.string,
//           tab: PropTypes.string,
//           img: PropTypes.string,
//           author: PropTypes.string
//       })
//   ).isRequired
// };

export default Cards;