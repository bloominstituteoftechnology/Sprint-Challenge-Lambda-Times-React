import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = (props) => {
	return (
		<div className="cards-container">
			{props.cards.map((card, index) => {
				return (
					<Card
						card={card}
						key={index}
						img={card.img}
						headline={card.headline}
						author={card.author}
					/>
				);
			})}
		</div>
	);
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string.isRequired,
			tab: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired
		})
	)
};
export default Cards;
