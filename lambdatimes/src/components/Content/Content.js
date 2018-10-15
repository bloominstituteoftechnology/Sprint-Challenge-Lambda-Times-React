import React, { Component } from 'react';
import './Content.css'
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import styled from 'styled-components';

const StyledContent = styled.div `
display: flex; 
flex-direction: column; 
align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      filtered: [],
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs:tabData, cards:cardData, filtered:cardData})
  }

  changeSelected = event => {
    // this.state.tabs.forEach(function (tab) {tab.classList.remove('selected')})
    const ID = event.target.getAttribute('id')
    const filtered = this.state.tabs.filter( tab => tab === ID)
    this.setState({selected:filtered});
    if (this.state.filtered === ID) {event.target.classList.add('selected')} 
    console.log(ID);
    const match = this.state.cards.filter( card => ID==='all' || card.tab === ID)
    this.setState({filtered:match});

  }
        // this function should take in the tab and update the state with the new tab.
  

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
  };

  render() {
    console.log(this.state.cards)
    return (
      <StyledContent>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        
        <Tabs tabs={this.state.tabs} selected={this.state.selected} changeSelected={this.changeSelected}  />
        <Cards cards={this.state.filtered} />
      </StyledContent>
    );
  }
}
