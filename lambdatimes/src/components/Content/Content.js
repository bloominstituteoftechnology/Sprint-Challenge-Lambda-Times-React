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
    this.setState({ tabs: tabData, cards: cardData });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
    console.log("changeSelected fired");
  };

  filterCards = () => {
    const filteredCards = this.state.cards.filter(card => {
      if (this.state.selected === "all") return true;

      return card.tab === this.state.selected;
    });

    return filteredCards;
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
