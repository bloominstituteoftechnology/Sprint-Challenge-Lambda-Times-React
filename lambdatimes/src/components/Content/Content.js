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
    this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = (tab) => {
    this.setState({ selected: tab });
  };



  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards; 
    } else {
    const cards = this.state.cards.filter(card => card.tab === this.state.selected);
    return cards; }
    }



  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}

        <Tabs
        tabs={this.state.tabs}
        selectedTab={this.state.selected}
        selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} 
        />
      </div>
    );
  }
}
