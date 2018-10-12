import React, { Component } from 'react';
import Card from './Card';
import { cardData } from '../../data';
import PropTypes from 'prop-types';

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
	}
	componentDidMount() {
		this.setState({ cards: cardData });
	}
	render() {
		return (
			<div className="cards-container">
				{this.state.cards.map((card) => {
					return (
						<Card
							tab={card.tab}
							img={card.img}
							author={card.author}
							key={card.headline}
							headline={card.headline}
						/>
					);
				})}
			</div>
		);
	}
}

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
