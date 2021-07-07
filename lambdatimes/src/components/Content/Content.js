import React, { Component } from 'react';


import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import Carousel from '../Carousel/Carousel';

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
    this.setState({tabs: tabData, cards: cardData});
    
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    
  
  };

  selectTabHandler = tab => {
    this.setState({selected: tab});
  };

  filterCards = () => {
    const cards = this.state.cards.filter(card => {
      if(this.state.selected === 'all'){
        return this.state.cards;
      } else if (this.state.selected === card.tab){
        console.log(card.tab);
        return card;
      }
    });
    return cards;
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectTabHandler={this.selectTabHandler} selected={this.state.selected}/>
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
