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
    this.setState({
      tabs:tabData,
      cards:cardData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selected:tab
    })
  };

  filterCards = () => {
    
    return this.state.cards.filter(e => (this.state.selected==="all") ? e : this.state.selected === e.tab);
  };

  render() {
    
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectTab={this.changeSelected} selected={this.state.selected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}


