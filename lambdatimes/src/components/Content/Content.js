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
    let newState = this.state;

    newState.tabs = [...tabData];
    newState.cards = [...cardData];

    this.setState(newState);
  }

  changeSelected = tab => e => {
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
        <Tabs 
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectedTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
