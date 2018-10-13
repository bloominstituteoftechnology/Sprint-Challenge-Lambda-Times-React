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
    this.setState({
      tabs: tabData,
      card: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    const cardFilter = cardData.filter(card => this.state.selected === 'all'
      || this.state.selected === card.tab);
        return cardFilter;
 };

  render() {
    return (
      <div className="content-container">
         <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}
