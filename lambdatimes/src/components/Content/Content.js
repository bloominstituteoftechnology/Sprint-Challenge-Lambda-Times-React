import React, { Component } from 'react';

import Tabs from './Tabs';
import Carousel from '../Carousel/Carousel';
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
    let newState = this.state;

    newState.tabs = [...tabData];
    newState.cards = [...cardData];

    this.setState(newState);
  }

  changeSelected = tab => e => {
    // this function should take in the tab and update the state with the new tab.
    e.preventDefault();

    this.setState({
      selected: tab,
    })
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <div className="content-container">
        <h2>Welcome back, { this.props.username }!</h2>
        <Tabs 
          tabs={ this.state.tabs } 
          selectTabHandler = { this.changeSelected } 
          selectedTab = { this.state.selected }
        />
        <Carousel />
        <Cards cards={ this.filterCards() } />
      </div>
    );
  }
}
