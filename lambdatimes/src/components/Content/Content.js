import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
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
    this.mapData();
  }
  
  mapData() {
    this.setState({ tabs: [...tabData] });
    this.setState({ cards: [...cardData] });
    console.log(this.state.tabs, this.state.cards);
  }

  changeSelected = (event) => {
    // NEEDS TESTING this function should take in the tab and update the state with the new tab.
    this.setState({ [event.target.name]: event.target.value })
    console.log("Changed selected tab to ", this.state.selected);
  };

  filterCards = () => {
    let filteredCards = [...this.state.cards];
    filteredCards = filteredCards.filter(card => {
      if(this.state.selected === 'all') {
        console.log("Returning all cards.")
        return card;
      } else if(card.tab === this.state.selected) {
        console.log("Returning: ", card)
        return card;
      }
    })
    this.setState({ cards: filteredCards })
  };

  render() {
    console.log(this.state.cards)
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          value = {this.state.selected}
          filterCards={this.filterCards}
          selectedTabHandler = {this.changeSelected}
        />
        <Cards 
          cards={this.state.cards} 
        />
      </div>
    );
  }
}
