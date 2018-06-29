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
      selected: 'placeholder',
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
    return (e) => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({selected: e.target.value});
  
      console.log(this.state.selected);
      console.log("changeSelected invoked")
    }
  }

    // changeInputHandler = (e) => {
    //   this.setState({selected:e.target.value})
    //   console.log("changeInputHandler invoked" )
    //   console.log(e.target.value)
    //   console.log("selected:",this.state.selected)
    // }


  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = (e) => {
    return (e) => {
    const selectedTab = this.state.selected.slice();
    const cardData = this.state.cards.slice();
    const filteredCardData = cardData.filter(card => card.tab === selectedTab);
    console.log("filterCards invoked")
    if (selectedTab === "all") {
       return this.setState({cards: cardData});
    }
    if (selectedTab === cardData.tab) {
      return this.setState({cards:filteredCardData});
    }}
  }

  selectTabHandler = (e) => {
    return (e) => {
      this.changeSelected(e)
      this.filterCards(e)
      console.log("selectTabHandler invoked")
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
          filterCards = {this.filterCards}
          selectTabHandler = {this.selectTabHandler}
          // changeInputHandler = {this.changeInputHandler}
        />
        <Cards cards={this.state.cards}/>
      </div>
    )
  }
}