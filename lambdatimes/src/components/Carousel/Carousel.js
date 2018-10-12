import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selected: ""
    };
  }
  componentDidMount() {
    this.setState({ images: carouselData, selected: carouselData[0] });
  }

  leftClick = () => {
    this.state.selected === this.state.images[0]
      ? this.setState({
          selected: this.state.images[this.state.images.length - 1]
        })
      : this.setState({
          selected: this.state.images[
            this.state.images.indexOf(this.state.selected) - 1
          ]
        });
  };

  rightClick = () => {
    this.state.selected === this.state.images[this.state.images.length - 1]
      ? this.setState({ selected: this.state.images[0] })
      : this.setState({
          selected: this.state.images[
            this.state.images.indexOf(this.state.selected) + 1
          ]
        });
  };

  selectedImage = () => (
    <img src={this.state.selected} alt="carousel" style={{ display: "block" }} />
  );

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
