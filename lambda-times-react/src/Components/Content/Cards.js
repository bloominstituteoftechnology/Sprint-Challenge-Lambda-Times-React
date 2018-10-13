import React from 'react';
import Card from './Card';


const Cards = props => {
    return (
        <div className="cards-container">
            {props.cards.map(card => {
                return (<Card key={Math.random()} card={card} />)
            })}

        </div>
    )
}

export default Cards;