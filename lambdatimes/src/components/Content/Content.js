import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import Carousel from '../Carousel/Carousel';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 0,
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs:tabData, cards: cardData});

  }

  changeSelected = (tab) => {
    const tabs = this.state.tabs.slice();
    
    const selected = tabs.indexOf(tab);
    
    this.setState({tabs:tabs, selected:selected});
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    const tabs = this.state.tabs.slice();
    const selected = this.state.selected;
    const active = tabs[selected];
    let cards = cardData.slice();
    console.log(active);
    console.log
    cards = cards.filter(card => card.tab === active); 
    console.log(cards);
    let returnCards;
    active !== 'all' ? returnCards = cards : returnCards = this.state.cards.slice(); 

    return returnCards;
  }

  render(){
    
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.tabs[this.state.selected]} selectTabHandler={this.changeSelected} />
        <Carousel />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}