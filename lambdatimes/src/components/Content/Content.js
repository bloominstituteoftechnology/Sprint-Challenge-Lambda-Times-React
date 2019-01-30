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
      cards: [],
      filteredCards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: [...tabData],
      cards: [...cardData]
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab,
    })
  };

  filterCards = (cards) => {
    console.log("returning cards")
    let filteredCards = [...this.state.cards]

    filteredCards = filteredCards.filter(card => {
      if (cards === "all"){
        console.log(cards)
      return card
    } else if (card.tab === cards){
    console.log(card)
    return card 
    }
    // return this.state.selected === 'all' ? this.state.cards : 
    // this.state.cards.filter( card => card.tab === this.state.selected);
  })
  this.setState({filteredCards: filteredCards})

};

  render() {
    console.log(this.state)
    return (
      <div className="content-container">
        {}
        <Tabs selectedTab ={this.state.selected} tab= {this.state.tabs}  filterCards={this.filterCards}/>
        <Cards cards={this.state.filteredCards} />
      </div>
    );
  }}
