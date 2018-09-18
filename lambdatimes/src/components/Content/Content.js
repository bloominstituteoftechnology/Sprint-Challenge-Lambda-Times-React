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
    this.setState({ cards: cardData, tabs: tabData})
  }

  changeSelected = (tab)=> {
    // this function should take in the tab and update the state with the new tab.
    this.setState ({ selected: tab });
  }

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
   if (this.state.selected === "all") { //if the selected tab is "all", then show all the cards
   return this.state.cards
   } else {
     return this.state.cards.filter(card => card.tab === this.state.selected) 
   } //filtering through the cards, checking on each card's "tab" value to see if it equals the selected tab, displaying the filtered matches
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} //this is the tab data
        selectedTab={this.state.selected} //the selected tab is equal to the slected data, then settng the selected
        selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} /> 
      </div>
    );
  }
}
