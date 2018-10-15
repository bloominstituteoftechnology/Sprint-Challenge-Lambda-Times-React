import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
	constructor() {
		super();
		this.state = {
			selected: 'all',
			tabs: [],
			cards: []
		};
	}

	componentDidMount() {
		const tabs = tabData;
		const cards = cardData;
		this.setState({
			tabs,
			cards
		});
	}

	changeSelected = (tab) => {
		this.setState({
			selected: tab
		});
	};

	filterCards = (tab) => {
		const cards = cardData;
		if (tab === 'all') {
			this.setState({ cards });
			return this.state.cards;
		} else {
			const newCards = cardData.filter((card) => card.tab === tab);
			this.setState({ cards: newCards });
		}
		// if (tab === 'all') return this.state.cards;
		// const cards = [ ...this.state.cards ];
		// return cards.filter((card) => card.tab === this.state.selected);
	};

	render() {
		return (
			<div className="content-container">
				<Tabs
					filterCards={this.filterCards}
					selectedTab={this.state.selected}
					tabs={this.state.tabs}
					selectTabHandler={this.changeSelected}
				/>
				<Cards cards={this.state.cards} filterCards={this.filterCards} />
			</div>
		);
	}
}
