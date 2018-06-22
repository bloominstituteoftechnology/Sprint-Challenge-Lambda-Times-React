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
      selected: 'ALL',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
	return (
	this.setState(
	{cards:cardData}
	),
	this.setState(
	{tabs:tabData}
	)
	);
  }

  changeSelected = (tab) => {
    this.setState(
	{selected:tab.target.innerHTML}
	);
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
	 if (this.state.selected === 'ALL'){
    return this.state.cards;
	 }
	 else {
		 var arr=[]
	for (let i=0; i<this.state.cards.length; i++){
		if (this.state.cards[i].tab.toUpperCase() === this.state.selected){
			arr.push(this.state.cards[i])
		}
		else {}
	}
	return arr;
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
        <Tabs tabs={this.state.tabs} selectTabHandler={this.changeSelected} selectedTab={this.state.selected}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}