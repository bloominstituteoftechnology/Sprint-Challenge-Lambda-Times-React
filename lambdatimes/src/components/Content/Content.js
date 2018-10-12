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
		this.setState({
			tabs: tabData,
			cards: cardData
		});
	}

	changeSelected = (tab) => {
		this.setState({
			selected: tab
		});
	};

	filterCards = (tab) => {
		if (tab === 'all') {
			this.setState({ cards: cardData });
			return this.state.cards;
		} else {
			const newCards = cardData.filter((c) => c.tab === tab);
			this.setState({ cards: newCards });
		}
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
