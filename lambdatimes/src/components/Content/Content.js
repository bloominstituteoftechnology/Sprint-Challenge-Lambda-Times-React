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
      selected: '',
      tabs: ['emptyTabs'],
      cards: ['emptyCards']
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    console.log("Content DidMount called");
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = (e) => {
    // return () => {
      // Finish this function, reflecting the new selected tab in the state
      // this.setState({selected: e.target.tab})
      
      this.setState({selected: e.target.value})
      console.log("changeSelected")
    // }
  }

  // selectTabHandler = e => {
  //   // console.log(event.target.value);
  //   this.setState({selected:e.target.value})
  // }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    const selectedTab = this.state.selected.slice();
    const cardData = this.state.cards.slice();
    const filteredCardData = cardData.filter(card => card.tab === selectedTab);

    if (selectedTab === "all") {
       return this.setState({cards: cardData});
    }
    if (selectedTab === cardData.tab) {
      return this.setState({cards:filteredCardData});
    }

  }

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
          tabs={this.state.tabs}
          selectedTab = {this.state.selected}
          changeSelected = {this.changeSelected}
        />
        <Cards cards={this.state.cards}/>
      </div>
    )
  }
}