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

    tabData.push('lambda');
    cardData.push({  
      headline: "Should you go to a bootcamp?",
      tab: "lambda",
      img: "./assets/sir.jpg",
      author: "SIR RUFF'N'STUFF"
    });
    cardData.push({  
      headline: "Just who is LambdaPerson, the latest super hero",
      tab: "lambda",
      img: "./assets/bones.jpg",
      author: "BONES R. LIFE"
    })
    this.setState({ tabs: tabData, cards: cardData }, () => {});

  }

  changeSelected = (tab) => {
    
      this.setState({selected: tab.target.innerText.toLowerCase()})
    
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if(this.state.selected === 'all'){
      return this.state.cards;
    }
    return this.state.cards.filter(e => e.tab ===this.state.selected);
  }

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} selectedTabHandler={this.changeSelected} tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}