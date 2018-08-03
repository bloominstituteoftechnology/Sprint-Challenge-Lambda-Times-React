import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
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

    }
  }

  filterCards = (tab) => {
    let displayedCards = [];
    cardData.forEach( card => {
      if (this.state.selected === "all") {
          displayedCards.push(card)
        } else if (this.state.selected === card.tab){
          displayedCards.push(card)
        }
    })

    // this.setState({
    //   cards: displayedCards,
    // })
    // return this.state.cards;

    //WHY DOESNT THIS WORK?

    return displayedCards;
  }

  render(){
    return (
      <div className="content-container">
        <Tabs
          selectedTab={this.state.selected} changeSelectedTab={this.changeSelectedTab}
          tabs={this.state.tabs} />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}
