import React, { Component } from 'react';

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
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({ tabs: tabData, cards: cardData });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
    const { selected, cards } = this.state;
    console.log('TCL: Content -> filterCards -> selected', selected);
    if (selected === 'all') return cardData;
    else return cards.filter(card => card.tab === selected);
  };

  render() {
    const {
      state: { tabs, selected },
      changeSelected,
      filterCards
    } = this;
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={tabs}
          selectedTab={selected}
          selectTabHandler={changeSelected}
        />
        <Cards cards={filterCards()} />
      </div>
    );
  }
}
