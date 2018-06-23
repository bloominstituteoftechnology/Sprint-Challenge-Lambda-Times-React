import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageIndex: 0,
    };
  }
  componentDidMount() {
    this.setState({ images: carouselData });
  }

  leftClick = () => {
    let prev = this.state.imageIndex - 1;
    if (prev < 0) prev = this.state.images.length - 1;
    this.setState({ imageIndex: prev });
  };

  rightClick = () => {
    let next = this.state.imageIndex + 1;
    if (next > this.state.images.length - 1) next = 0;
    this.setState({ imageIndex: next });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.imageIndex]}
        alt={this.state.images[this.state.imageIndex]}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
