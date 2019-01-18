import React from 'react';
import PropTypes from 'prop-types';
import styled from './../../../node_modules/styled-components';
import Card from './Card';

const Div = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: none;
	flex-direction: row;
	width: 100%;
	margin-top: 16px;
	flex-wrap: wrap;
	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

const Cards = (props) => {
	return (
		<Div>
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
		</Div>
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
