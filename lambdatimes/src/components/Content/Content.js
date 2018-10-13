import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel'
import { tabData, cardData } from '../../data';

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

  changeSelected = tab => {
    this.setState({
      selected: tab.target.innerHTML.toLowerCase(),
    })
  };

  filterCards = () => {

    const newState = {...this.state};
    if (this.state.selected !== 'all'){
      const filter = newState.cards.filter((card) => card.tab === this.state.selected);
      return filter;
    } else {
      return this.state.cards;
    }
  }

  render() {
    console.log(this.selectedTab)
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selectedTab={this.state.selected}/>
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}