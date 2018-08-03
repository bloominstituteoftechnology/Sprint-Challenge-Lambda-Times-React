import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({selected: tab})
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    return this.state.cards.filter(item => {
      if (this.state.selected === 'all') {
        return this.state.selected
      } else {
        return item.tab === this.state.selected
      }
    });
  }

  render(){
    console.log(this.state.selected)
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.selectTabHandler}
        />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}