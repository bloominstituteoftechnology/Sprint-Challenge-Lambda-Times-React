import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount(tab) {
    this.setState({
      cards: cardData,
      tabs: tabData
    })
  }

  changeSelected = (tab) => {
    console.log(tab);
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if(this.state.selected === 'all'){
      return this.state.cards
    }else{
      return(this.state.cards.filter(card =>
        card.tab === this.state.selected
      ))
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}

Content.propTypes = {
  changeSelected: PropTypes.func,
  filterCards: PropTypes.func
}
