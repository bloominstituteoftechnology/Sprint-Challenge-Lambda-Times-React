import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selected: 0
    };
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    let newClick = 0;
    if (this.state.selected === 0) {
      newClick = this.state.images.length - 1;
    } else {
      newClick = this.state.selected - 1;
    }
    this.setState({
      selected: newClick
    });
  };

  rightClick = () => {
    let newClick = 0;
    if (this.state.selected === this.state.images.length - 1) {
      newClick = 0;
    } else {
      newClick = this.state.selected + 1;
    }
    this.setState({
      selected: newClick
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.selected]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <this.selectedImage />
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
