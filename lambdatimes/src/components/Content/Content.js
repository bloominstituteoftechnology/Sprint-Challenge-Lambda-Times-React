import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

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
    this.setState({ tabs: tabData });
    this.setState({ cards: cardData });
  }

  changeSelected = tab => {
    return () => {
      this.setState({ selected: tab });
    };
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
      return cardData;
    }
    return cardData.filter(card => card.tab === this.state.selected);
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          selectTabHandler={this.changeSelected}
          selectedTab={this.state.selected}
        />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
