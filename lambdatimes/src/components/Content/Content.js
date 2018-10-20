import React, { Component } from 'react';
import {ContentContainer} from '../StyledComponents';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

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
      tabs: [...tabData],
      cards: [...cardData]
    })
  }

  changeSelected = tab => {
    this.setState({selected: tab})
  };

  filterCards = () => this.state.selected === 'all' ? this.state.cards : this.state.cards.filter(card => card.tab === this.state.selected)

  render() {
    return (
      <ContentContainer>
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected} 
          selectTabHandler={this.changeSelected} 
        />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
