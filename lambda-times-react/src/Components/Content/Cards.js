import React from 'react';
import Card from './Card';
import './Cards.css';


const Cards = props => {
    return (
        <div className="cards-page">
            <div className="cards-container">
                {props.cards.map(card => {
                    return (<Card key={Math.random()} card={card} />)
                })}

            </div>
         </div>
    )
}

export default Cards;