import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      rightCounter: 0,
      leftCounter: 0,
      counter: 0
    };
  }
  componentDidMount() {
    this.setState({
      carouselData: carouselData,
      leftCounter: carouselData.length - 1
    });
  }

  leftClick = () => {
    if (this.state.leftCounter <= 0) {
      this.setState(() => {
        return {
          leftCounter: this.state.carouselData.length - 1,
          counter: this.state.leftCounter
        };
      });
    } else {
      this.setState(prevState => {
        return {
          leftCounter: prevState.leftCounter - 1,
          counter: this.state.leftCounter
        };
      });
    }
  };

  rightClick = () => {
    if (this.state.rightCounter >= this.state.carouselData.length - 1) {
      this.setState(prevState => {
        return {
          rightCounter: prevState.rightCounter - prevState.rightCounter,
          counter: this.state.rightCounter
        };
      });
    } else {
      this.setState(prevState => {
        return {
          rightCounter: prevState.rightCounter + 1,
          counter: this.state.rightCounter
        };
      });
    }
  };

  selectedImage = () => {
    return (
      <img
        src={carouselData}
        style={{ display: "block" }}
        alt="carousel_images"
      />
    );
  };

  render() {
    console.log(this.state.leftCounter);
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <img
          src={this.state.carouselData[this.state.counter]}
          style={{ display: "block" }}
          alt="carousel_images"
        />
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
