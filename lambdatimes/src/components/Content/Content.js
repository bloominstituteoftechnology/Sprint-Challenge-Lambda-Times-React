import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(){
    super();
    this.state = {
      selected: '',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({
      tabs: tabData.map(tab => tab.toLowerCase()),
      cards: cardData
    })
  }

  changeSelected = (e) => {
    const selectedTab = e.target.innerText.toLowerCase();
    this.setState({ selected: selectedTab });
  }

  filterCards = () => {
    if (this.state.selected === 'all' || this.state.selected === '') {
      return this.state.cards;
    }

    return this.state.cards.filter(card => {
      return card.tab.toLowerCase() === this.state.selected;
    })
  }

  render(){
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          selectTabHandler={this.changeSelected.bind(this)}
          selectedTab={this.state.selected}
        />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}