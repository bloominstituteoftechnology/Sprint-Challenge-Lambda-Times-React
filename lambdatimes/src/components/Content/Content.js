import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';


export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({
      tabs: tabData, 
      cards: cardData
    })
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    return this.state.cards;
  }

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}