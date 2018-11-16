import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caroselImgs: [],
      selectedImageIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      caroselImgs: carouselData
    });
  }

  leftClick = () => {
    if (this.state.selectedImageIndex === 0) {
      this.setState({
        selectedImageIndex: this.state.caroselImgs.length - 1
      });
    } else {
      this.setState({
        selectedImageIndex: this.state.selectedImageIndex - 1
      });
    }
  };

  rightClick = () => {
    if (this.state.caroselImgs.length - 1 === this.state.selectedImageIndex) {
      this.setState({
        selectedImageIndex: 0
      });
    } else {
      this.setState({
        selectedImageIndex: this.state.selectedImageIndex + 1
      });
    }
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.caroselImgs[this.state.selectedImageIndex]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
