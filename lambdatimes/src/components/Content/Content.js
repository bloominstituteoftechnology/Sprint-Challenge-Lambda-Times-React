import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
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
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  }

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      return this.state.cards.filter((card) => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selected={this.state.selected} changeSelected={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}

Content.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string
    })
  ),
  selected: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}
