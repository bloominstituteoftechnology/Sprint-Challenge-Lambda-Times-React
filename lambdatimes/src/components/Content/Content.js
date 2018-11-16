// Importing libraries
import React, { Component } from 'react';
import styled from 'styled-components';

// Importing components
import Tabs from './Tabs';
import Carousel from '../Carousel/Carousel';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

// Styled Components
const ContentContainer = styled.div`
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
    this.setState({
      tabs: tabData,
      cards: cardData,
    });
  }

  changeSelected = tab => {
    this.setState({
      selected: tab,
    });
  };

  filterCards = () => {
    return this.state.selected === 'all' ?
      this.state.cards :
      this.state.cards.filter(card => card.tab === this.state.selected);
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
