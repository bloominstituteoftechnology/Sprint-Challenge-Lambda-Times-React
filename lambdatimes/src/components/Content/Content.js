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
      tabs: tabData,
      cards: cardData
    };
    //this.content = {tabs: [], cards: []}; //object that we use to render
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    /*This would be stupid to do, cuz the data is on the client already so
    why would would double refresh the state?
    
    If we where preforming a fetch we would use this to fetch, but because 
    the data is already stored we only need to render once.*/

  }

  changeSelected = str => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: str, tabs: this.state.tabs, cards: this.state.cards})
  };

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
   return this.state.selected === "all" ? 
        this.state.cards : 
        this.state.cards.map(x=>x).filter(x=> x.tab===this.state.selected);
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */
       }
        <Tabs tabs={this.state.tabs} selectTabHandler={(s)=>this.changeSelected(s)} selectedTab={this.state.tabs.find(x=> x===this.state.selected)} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
