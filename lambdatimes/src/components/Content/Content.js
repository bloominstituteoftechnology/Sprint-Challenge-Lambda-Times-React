import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const ContentContainer = styled.div`
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
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({
        selected: tab
      })
  }

  /* Complete this function, if the selected tab is 'all' it should return all
     of the items from cardData. If it is something else, it shoudl only return
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    let selected = this.state.selected;
    if(selected === 'all') return this.state.cards;
    return this.state.cards.filter(card => card.tab === selected);
  }

  render(){
    return (
      <ContentContainer>
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Carousel />
        <Cards cards={this.filterCards()}/>
      </ContentContainer>
    )
  }
}
