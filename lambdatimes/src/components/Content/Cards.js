import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = (props) => {
	return (
		<div className="cards-container">
			{props.cards.map((card) => {
				return (
					<Card
						tab={card.tab}
						img={card.img}
						author={card.author}
						key={card.headline}
						headline={card.headline}
						onChange={card.filterCards}
					/>
				);
			})}
		</div>
	);
};

Cards.propTypes = {
	cardData: PropTypes.shape({
		tab: PropTypes.string,
		img: PropTypes.string,
		author: PropTypes.string,
		key: PropTypes.string,
		headline: PropTypes.string
	})
};

// Make sure you include prop types for all of your incoming props

export default Cards;
