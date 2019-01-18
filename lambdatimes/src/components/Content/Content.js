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
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelected = (e,tab) => {
    console.log(e.target)
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
   return this.state.cards.filter(card => {
     if(card.tab === this.state.selected){
       return card;
      }else if(this.state.selected === 'all'){
        return card;
      }
   })
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectTabHandler={this.changeSelected} selectedTab={this.state.selected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
