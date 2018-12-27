import React, { Component } from 'react';
import './Content.css'
import Tabs from './Tabs';
import Cards from './Cards';
import PropTypes from 'prop-types'
// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import styled from 'styled-components';
import {StyledTab} from './Tab'
const StyledContent = styled.div `
display: flex; 
justify-content: center;
flex-direction: column; 
align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs:tabData, cards:cardData, filtered:cardData})
  }

  selectedTabHandler = tab => {
    // this.state.tabs.forEach(function (tab) {tab.classList.remove('selected')})
    // const filtered = this.state.tabs.filter( tab => tab === ID)
    // this.setState({selected:filtered});
    this.setState({selectedTab:tab})
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
    return this.state.selectedTab === 'all' ? this.state.cards : this.state.cards.filter(card => card.tab === this.state.selectedTab)

  };

  render() {
    return (
      <StyledContent>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selectedTab} selectedTabHandler={this.selectedTabHandler}  />
        <Cards cards={this.filterCards()} />
      </StyledContent>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  selected: PropTypes.string,
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
     headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string,
      
})
  )
}
