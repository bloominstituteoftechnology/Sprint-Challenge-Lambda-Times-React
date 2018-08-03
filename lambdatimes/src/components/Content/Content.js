import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

import style from 'styled-components';
const ContentContainer = style.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;



export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: [],
      selectedCards:[]
    }
    console.log("this selected",this.state.selected);
    
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({
      tabs: tabData, cards: cardData,
    });
  }

  changeSelected = (tab) => {
      this.setState({
        selected: tab,
      })
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    // let carditos = this.state.cards.slice();
    // if (this.state.selected !== 'all') {
    //   nuCards = carditos.map((card)=>{
    //     if(card.tab === this.state.selected){
    //       return card
    //     }
    //   })
    // } else {
    //   nuCards = carditos;
    // }
    
    // this.setState({
    //   cards: nuCards
    // })

    return this.state.cards;

}

  render(){
    return (
      <ContentContainer>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()}/>
      </ContentContainer>
    )
  }
}