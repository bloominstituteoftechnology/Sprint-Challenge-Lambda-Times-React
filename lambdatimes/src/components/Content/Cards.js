import React, { Component } from 'react';
import Card from './Card';
import { cardData } from '../../data';

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
						<div className="card" tab={card.tab} key={card.headline}>
							<div className="headline">{card.headline}</div>
							<div className="author">
								<div className="img-container">
									<img src={card.img} />
								</div>
								<span>{card.author}</span>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

// Make sure you include prop types for all of your incoming props

export default Cards;
