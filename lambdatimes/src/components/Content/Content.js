import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`

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

    setTimeout(() => {
      this.setState({
        tabs: tabData,
        cards: cardData,
      })
    }, 500)
  }

  changeSelected = (tab) => {
    
    this.setState({ selected: tab })
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
     return cardData
    } else {
     return cardData.filter(card => card.tab === this.state.selected) 
   }
  };

  render() {
    return (
      <ContentContainer>
        
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}