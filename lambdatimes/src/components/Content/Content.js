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
      selectedTab:'all',
      tabs: [],
      cards: [],
      selectedCards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs:tabData})
    this.setState({cards: cardData})
  }

  changeSelected = (tab) => {
    this.setState({selectedTab: tab});
    
    
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' matched that which is selected. */
  filterCards = (carddata) => {
    let cardscopy = carddata.slice();
    let selected = []
    if (this.state.selectedTab === 'all'){
      return cardscopy;
    } else {
    for (let i=0; i<cardscopy.length; i++){
      if (cardscopy[i].tab == this.state.selectedTab){
        selected.push(cardscopy[i])
      }
    }return selected;
    };
    this.setState({selectedCards: selected});
  }

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs changeSelected={this.changeSelected} tabs={this.state.tabs}/>
        <Cards cards={this.filterCards(this.state.cards)}/>
      </div>
    )
  }
}

// this.filterCards(this.state.selectedTab)