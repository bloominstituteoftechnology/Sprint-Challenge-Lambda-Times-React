import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
	return (
		<div className="cards-container">
			{props.cards.map(card => {
				return <Card key={Math.random()} card={card} />;
			})}
		</div>
	);
};

Cards.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			tab: PropTypes.string,
			author: PropTypes.string,
			img: PropTypes.string,
			headline: PropTypes.string
		}).isRequired,
	)
};

// Make sure you include prop types for all of your incoming props

export default Cards;
