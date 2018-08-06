import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";
import Carousel from "../Carousel/Carousel";

import { tabData, cardData, carouselData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: [],
      typeStart: 0,
      imgURL: "",
      type: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
      type: carouselData,
      imgURL: carouselData[0].img
    });
  }

  changeSelected = tab => {
    let data = this.state.type.slice();
    data = data.filter(item => item.name === tab);
    this.setState({
      selected: tab,
      typeStart: data[0].id,
      imgURL: data[0].img
    });
  };

  filterCards = () => {
    return this.state.cards.filter(item => {
      if (this.state.selected === "all") {
        return this.state.selected;
      } else {
        return item.tab === this.state.selected;
      }
    });
  };

  leftClick = () => {
    this.setState(prevState => {
      if (prevState.typeStart === 0) {
        return { typeStart: 5 };
      } else {
        return { typeStart: prevState.typeStart - 1 };
      }
    });
    window.setTimeout(() => {
      this.setState({
        selected: this.state.type[this.state.typeStart].name,
        imgURL: this.state.type[this.state.typeStart].img
      });
    });
  };

  rightClick = () => {
    this.setState(prevState => {
      if (prevState.typeStart === 5) {
        return { typeStart: 0 };
      } else {
        return { typeStart: prevState.typeStart + 1 };
      }
    });
    window.setTimeout(() => {
      this.setState({
        selected: this.state.type[this.state.typeStart].name,
        imgURL: this.state.type[this.state.typeStart].img
      });
    });
  };

  render() {
    return (
      <div className="content-container">
        <Carousel
          leftClick={this.leftClick}
          rightClick={this.rightClick}
          selected={this.state.selected}
          img={this.state.imgURL}
        />
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          changeSelected={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
