import React, { Component } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import { tabData, cardData } from "../../data";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";
import Authenticate from "../Authenticate";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Welcome = styled.h2`
  font-family: Didot, serif;
  margin-bottom: 0;
`;
class Content extends Component {
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
    this.setState({
      selected: tab
    });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Welcome>Welcome Back, {window.localStorage.getItem("user")}</Welcome>
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}

export default Authenticate(Content);
