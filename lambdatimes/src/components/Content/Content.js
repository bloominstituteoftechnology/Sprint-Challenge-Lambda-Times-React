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
		// Once the component has mounted, get the data and reflect that data on the state.
	}

	changeSelected = (tab) => {
		this.setState({
			selected: tab
		});
		// this function should take in the tab and update the state with the new tab.
	};

	filterCards = (tab) => {
		if (tab === 'all') {
			this.selectedtab({ cards: cardData });
			return this.state.cards;
		} else {
			const newCards = cardData.filter((c) => c.tab === tab);
			this.setState({ cards: newCards });
		}
		// /* Right now this function only returns the cards on state.
		//   We're going to make this function more dynamic
		//   by using it to filter out our cards for when a tab is selcted
		//   Notice that we're passing this function to our <Cards /> component below.
		//   This function returns an array of cards, so we can just pass it down as such.
		//   Your algorithim for the logic here is as follows:
		//     - if the selected tab is 'all' it should return all
		//       of the items from cardData.
		//     - else, it should only return those cards whose 'tab' matched this.state.selected.
		// */
	};

	render() {
		return (
			<div className="content-container">
				{/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
				<Tabs
					filterCards={this.filterCards}
					selectedTab={this.state.selected}
					tabs={this.state.tabs}
					selectTabHandler={this.changeSelected}
				/>
				<Cards card={this.state.cards} />
			</div>
		);
	}
}
