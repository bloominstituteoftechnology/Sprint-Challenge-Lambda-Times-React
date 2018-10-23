import React, { Component } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import { tabData, cardData } from "../../data";
import { ContentContainer } from "../Content/Styled";

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
  };

  filterCards = () => {
    return this.state.selected === "all"
      ? cardData
      : this.state.cards.filter(card => card.tab.includes(this.state.selected));
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
