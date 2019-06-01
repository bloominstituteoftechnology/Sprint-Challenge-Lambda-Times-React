import React, { Component } from 'react';
import Styled from 'styled-components';
import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const StyledContent = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selected: tab
    })
    return this.filterCards();
  };

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
    if (this.state.selected === 'all') {
    return this.state.cards;
  }
  else {
    let cards = [];
    this.state.cards.map(card => {
      return card.tab === this.state.selected ? cards.push(card) : null;
    })
    return cards;
  }
  }

  render() {
    return (
      <StyledContent>
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs}
               selectTabHandler={this.changeSelected}
               selectedTab={this.state.selected}/>
        <Carousel />
        <Cards cards={this.filterCards()} />
    </StyledContent>
    );
  }
}
