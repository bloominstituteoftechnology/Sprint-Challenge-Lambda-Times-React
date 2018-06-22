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
      selected: '',
      tabs: [],
      cards: [],
      filteredCards: [],
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs: tabData, cards: cardData, selected: 'all'});
  }

  changeSelected = tab => {
    this.setState({selected: tab});
    setTimeout(() => {
      this.filterCards();
    }, 50)
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    const cards = this.state.cards.filter(card => {
      if(card.tab === this.state.selected)
      return card;
    });
    this.setState({filteredCards: cards})
  }

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selected={this.state.selected} select={this.changeSelected} />
        <Carousel />
        <Cards cards={this.state.filteredCards.length > 0 ? this.state.filteredCards : this.state.cards}/>
      </div>
    )
  }
}