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
      selected: 'all',
      tabs: [],
      cards: [],
    }
  }

  componentDidMount(){
    this.setState({
      tabs: tabData, cards: cardData,
    });
  }

  changeSelected = (tab) => {
      this.setState({
        selected: tab,
      })
  }

  filterCards = () => {
    if(this.state.selected === 'all') return this.state.cards;
    let nuC = this.state.cards.filter((card,i)=>{ 
      return card.tab === this.state.selected;
    }); 
    return nuC;
  }

  render(){
    return (
      <ContentContainer>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()}/>
      </ContentContainer>
    )
  }
}