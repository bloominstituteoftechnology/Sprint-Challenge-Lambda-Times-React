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
    this.setState({
      tabs: tabData,
      cards: cardData
    })
    console.log(this.state)
  }

  changeSelected = (tab) => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selected: tab.currentTarget.textContent.toLowerCase()
    })
  };

  filterCards = () => {
    if(this.state.selected === 'all'){
      return this.state.cards
    }
    const filterdCard = this.state.cards.filter(e => e.tab.includes(this.state.selected) ||e.tab.includes(this.state.selected.charAt(0).toUpperCase() + this.state.selected.substr(1)))
    
    if(filterdCard.length > 0) {
      return filterdCard
    }
   
  };

  render() {
    console.log(this.state)
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selectedTab={this.state.selected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
