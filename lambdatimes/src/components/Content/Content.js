import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({ tabs: tabData, cards: cardData });
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({ tabs: tab });
  };

  filterCards = event => {
    /* 
      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */

    const crds = this.state.cards.filter(c => {
      if (this.state.selected.includes(c.tab)) {
        return c;
      }
    });
    this.setState({ cards: crds });
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards
          cards={
            this.state.selected === "all" ? this.state.cards : this.filterCards
          }
        />
      </div>
    );
  }
}
