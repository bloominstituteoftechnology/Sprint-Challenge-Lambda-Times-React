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
this.setState(
  {
    cards: cardData,
    tabs: tabData,

});
  }

  changeSelected = tab => {
    console.log(tab);
    if(tab==="react.js"){
      tab="React.js"
    }
  let NewTab =  tab;
this.setState({
  selected: NewTab,
})

    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = (tab) => {
    let s = this.state.selected
    console.log(this.state.cards.filter(function (n,i){
        return n.tab==="React.js";
    }));

    if(this.state.selected==="all"){
      return this.state.cards;
    }
    if(this.state.selected==="javascript"){
      return this.state.cards.filter(function (n,i){
          return n.tab==="javascript";
      });
    }
    if(this.state.selected==="technology"){
      return this.state.cards.filter(function (n,i){
          return n.tab==="technology";
      });
    }
    if(this.state.selected==="bootstrap"){
      return this.state.cards.filter(function (n,i){
          return n.tab==="bootstrap";
      });
    }
    if(this.state.selected==="React.js"){
      return this.state.cards.filter(function (n,i){
          return n.tab==="React.js";
      });
    }
    if(this.state.selected==="node"){
      return this.state.cards.filter(function (n,i){
          return n.tab==="node";
      });
    }
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

  };

  render() {
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectTabHandler={this.changeSelected} selectedTab={this.state.selected}  tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
