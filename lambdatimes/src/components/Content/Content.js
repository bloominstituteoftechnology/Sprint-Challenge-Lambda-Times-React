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
    this.setState(() => ({tabs: tabData, cards: cardData}));
  }

  changeSelected = tab => {
    this.setState(() => ({selected: tab}));
  };

  filterCards = () => {
    const {cards, selected} = this.state;
    return selected === 'all' ? cards : cards.filter(c => c.tab === selected)
  };

  render() {
    const {selected, tabs} = this.state;

    return (
      <div className="content-container">

        <Tabs tabs={tabs} selectedTab={selected} selectTabHandler={tab => this.changeSelected(tab)}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
