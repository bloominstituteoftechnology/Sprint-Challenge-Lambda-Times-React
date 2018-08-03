import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({
      selected: "all",
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelectedTab = (tab) => {
    return () => {
      this.setState({
        selected: tab,
      })
      // Finish this function, reflecting the new selected tab in the state
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all
     of the items from cardData. If it is something else, it shoudl only return
     those cards whose 'tab' mached that which is selected. */
  filterCards = (tab) => {

    let displayedCards = [];

    cardData.forEach( card => {
      // console.log(card)
      if (this.state.selected === "all") {
          displayedCards.push(card)
        } else if (this.state.selected === card.tab){
          displayedCards.push(card)
        }//if Statement
    }) //forEach

    // this.setState({
    //   cards: displayedCards,
    // })
    // return this.state.cards;

    return displayedCards;
  }

  render(){
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          selectedTab={this.state.selected} changeSelectedTab={this.changeSelectedTab}
          tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}
