import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'javascript',
      tabs: [],
      cards: [],
      filteredCards: []
    };
  }

  componentDidMount() {
    this.mapData();
  }
  
  mapData() {
    this.setState({ tabs: [...tabData] });
    this.setState({ cards: [...cardData] });
    this.setState({ filteredCards: [...cardData] })
    //console.log(this.state.tabs, this.state.cards);
  }

  // changeSelected = (tab) => {
  //   console.log("changeSelected ", tab);
  //   // NEEDS TESTING this function should take in the tab and update the state with the new tab.
  //   this.setState({ selected: tab });
  //   this.filterCards();
  //   console.log("Changed selected tab to ", this.state.selected);
  // };

  filterCards = (cards) => {
    let filteredCards = [...this.state.cards];
    filteredCards = filteredCards.filter(card => {
      if(cards === 'all') {
        console.log("Returning all cards.")
        return card;
      } else if(card.tab === cards) {
        console.log("Returning: ", card)
        return card;
      }
    })
    this.setState({ filteredCards: filteredCards })
    console.log(filteredCards);
  };

  render() {
    //console.log(this.state.cards)
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          value = {this.state.selected}
          filterCards={this.filterCards}
          //selectedTabHandler = {this.changeSelected}
        />
        <Cards 
          cards={this.state.cards} 
          filteredCards={this.state.filteredCards}
        />
      </div>
    );
  }
}
