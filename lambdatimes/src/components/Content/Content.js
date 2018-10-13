import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import { ContentContainer } from '../Styles/Styles';
// import { consolidateStreamedStyles } from 'styled-components';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelected = (event, tab) => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    
    if (this.state.selected === 'all') {
      return this.state.cards
    } else {
      let filtered = this.state.cards.filter(card => card.tab.includes(this.state.selected))
      return filtered
    }
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          changeSelected={this.changeSelected}
          selected={this.state.selected}
        />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
