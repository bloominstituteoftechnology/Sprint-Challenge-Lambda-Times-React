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
    if(this.state.selected === "all"){
      return cardData;
    } else {
      return this.state.cards.filter(card => {
        if(this.state.selectedTab === card.tab){
         return card; 
    }
  });
}
return this.state.cards; 
  }; 

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs}
         selectedTab={this.state.selectedTab} 
         changeSelected={this.changeSelected}
         />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
