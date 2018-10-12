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
    setTimeout(() => {
      this.setState({ tabs: tabData, cards: cardData });
    }, 2000);
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if (this.selected !== "all") {
      const coppyOfCards = this.state.cards.filter(
        item => item.tab === this.state.selected
      );
      return coppyOfCards;
    }
    return this.state.cards;
  };

  render() {
    if(this.state.selected==="all"){
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
          <Cards cards={this.state.cards} />
        </div>
      );
    }
    else{
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
        <Cards cards={this.filterCards()} />
      </div>
    );
    }
    
  }
}
