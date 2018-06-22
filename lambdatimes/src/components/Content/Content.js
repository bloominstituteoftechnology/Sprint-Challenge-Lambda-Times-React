import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Authenticate from '../Authenticate/Authenticate';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData });
    // Once the component has mounted, get the data and reflect that data on the state
  }

  changeSelected = (tab) => {
    this.setState({ selected: tab })
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      return this.state.cards.filter(name => name.tab === this.state.selected);
    }
  }

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}

export default Authenticate(Content);