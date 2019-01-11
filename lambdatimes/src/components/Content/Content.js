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
      tabs: tabData,
      cards: cardData,
    });
  }

  selectTabHandler = (event,tab) => {
    const selected = event.target.className;
    this.setState({selected: selected});
    
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      const selectedTab = this.state.selected;
      return this.state.cards.filter(card => card.tab === selectedTab)
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selectedTab} 
          selectTabHandler={this.selectTabHandler}
          />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
