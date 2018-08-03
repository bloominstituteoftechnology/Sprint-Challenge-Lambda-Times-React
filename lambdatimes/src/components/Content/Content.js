import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: '',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
      this.setState({
        tabs: tabData,
        cards: cardData
      });
  }

  changeSelected = (tab) => {
    this.setState(
      {selected: tab}
    );
    return () => {
      this.filterCards();

//---------------need help here---------------------//

      // Finish this function, reflecting the new selected tab in the state
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it should only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if (this.state.selected === 'all'){ //if the tab selected is the 'all', display all cards
    return this.state.cards;
  } else {
    return this.state.cards.filter(card => card.tab === this.state.selected) //display the cards with tab names that match the selected tab name
  }
}

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab = {this.state.selected} selectTabHandler = {this.changeSelected}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}