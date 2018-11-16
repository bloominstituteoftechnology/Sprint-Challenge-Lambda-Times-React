import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

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
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    tab.preventDefault();
    this.setState({
      selected: tab.target.tab
    });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      this.setState({
        cards: Cards
      });
    } else {
      let filtered = Cards.filter(card =>
        card.tab.includes(this.state.selected)
      );
      this.setState({
        cards: filtered
      });
    }
    return this.state.cards;
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
