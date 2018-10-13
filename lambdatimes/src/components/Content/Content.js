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
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      selected:this.state.selected,
      tabs:this.state.tabs,
      cards:this.state.cards
  })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    return()=>{
      this.setState({selected:tab});
    }
  };

  filterCards = () => {
      if(this.state.selected==="all"){
        return cardData;}
        else{
            return cardData.filter(card=>{
              return card.tab===this.state.selected;
            });
        }
    return this.state.cards;
  };

  render() {
    return (
      <div className="content-container">
       
        <Tabs tabs={this.state.tabs}
              selectedTab={this.state.selected}
              selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
