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
    const tabs = tabData;
    const cards = cardData;

    this.setState({
      tabs: tabs,
      cards: cards
    });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    }
    const cards = [...this.state.cards];
    return cards.filter(card => card.tab === this.state.selected);
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          selected={this.state.selected}
          changeSelected={this.changeSelected}
          tabs={this.state.tabs}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
