import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
	{props.cards.map((value) => (
	<div key={Math.random(Date.now())}>
	<Card
	headline={value.headline}
	img={value.img}
	author={value.author}
	/>
	</div>
	))
	}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;