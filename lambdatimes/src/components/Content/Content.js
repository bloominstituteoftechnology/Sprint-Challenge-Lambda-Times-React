import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Carousel from '../Carousel/Carousel';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({
      tabs: tabData, 
      cards: cardData
    });
  }

  changeSelected = (tab) => {
    this.setState({
      selected: tab,
    });
  }

  filterCards = () => {
    if (this.state.selected === 'all') {
      return cardData;
    }
    return cardData.filter(card => card.tab === this.state.selected);
  }

  render(){
    return (
      <ContentContainer>
        <Tabs tabs={this.state.tabs} 
          selectedTab={this.state.selected} 
          selectTabHandler={this.changeSelected} />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    )
  }
}

export default Content;