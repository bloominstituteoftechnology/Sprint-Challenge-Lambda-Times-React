import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';


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
      tabs: [...tabData],
      cards: [...cardData]
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selected: tab,
    })
  };

  filterCards = () => {

    return this.state.selected === 'all' ? this.state.cards : this.state.cards.filter( card => card.tab === this.state.selected);
  };

  render() {
    return (
      <div className="content-container">
        {}

        <Tabs
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
          tabs={this.state.tabs} />

        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
