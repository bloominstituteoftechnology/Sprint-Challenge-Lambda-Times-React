import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [],
      selectedImageIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      slider: carouselData
    });
  }

  leftClick = () => {
    this.setState({
      selectedImageIndex:
        this.state.selectedImageIndex === 0
          ? this.state.slider.length - 1
          : this.state.selectedImageIndex - 1
    });
  };

  rightClick = () => {
    this.setState({
      selectedImageIndex:
        this.state.selectedImageIndex === this.state.slider.length - 1
          ? 0
          : this.state.selectedImageIndex + 1
    });
  };

  selectedImageIndex = () => {
    return (
      <img
        src={this.state.slider[this.state.selectedImageIndex]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    console.log("SLIDER STATE LENGTH", this.state.slider.length);

    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImageIndex()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
