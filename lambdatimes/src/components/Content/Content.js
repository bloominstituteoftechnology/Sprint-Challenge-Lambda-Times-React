import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({tabs: tabData, cards: cardData});
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: tab})
  };

  filterCards = (tab) => {
    const cards = cardData;
    if (tab === 'all') {
      this.setState({cards});
      return this.state.cards;
    } else {
      const newCards = cardData.filter((card) => card.tab === tab);
      this.setState({cards: newCards})
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} 
        filterCards={this.filterCards}
        selectedTab={this.state.selected}
        selectTabHandler={this.changeSelected}
        />
        <Cards filtercards={this.filterCards()} 
        cards={this.state.cards}
        />
      </div>
    );
  }
}
